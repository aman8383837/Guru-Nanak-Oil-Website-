export interface Holiday {
  id: string;
  startDate: string;
  endDate: string;
  reason: string;
}

export interface ShopState {
  isOpen: boolean;
  type: "hours" | "holiday" | "force_close" | "sunday";
  currentDateStr: string;
  currentTimeStr: string;
  nextOpenStr: string;
  holidayReason?: string;
  countdownSeconds: number;
}

export const getLocalDateString = (d: Date): string => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const DEFAULT_HOLIDAYS: Holiday[] = [
  { id: "1", startDate: "2026-06-25", endDate: "2026-06-25", reason: "Eid Festival" },
  { id: "2", startDate: "2026-08-15", endDate: "2026-08-15", reason: "Independence Day" },
  { id: "3", startDate: "2026-10-02", endDate: "2026-10-04", reason: "Diwali Break" },
];

export function getHolidays(): Holiday[] {
  try {
    const saved = localStorage.getItem("guru_nanak_holidays");
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return DEFAULT_HOLIDAYS;
}

export function saveHolidays(holidays: Holiday[]) {
  try {
    localStorage.setItem("guru_nanak_holidays", JSON.stringify(holidays));
  } catch (e) {}
}

export function getForceStatus(): "auto" | "open" | "closed" {
  return (localStorage.getItem("guru_nanak_force_status") as any) || "auto";
}

export function setForceStatus(status: "auto" | "open" | "closed") {
  localStorage.setItem("guru_nanak_force_status", status);
}

export function getForceReason(): string {
  return localStorage.getItem("guru_nanak_force_reason") || "Emergency Shop Closure";
}

export function setForceReason(reason: string) {
  localStorage.setItem("guru_nanak_force_reason", reason);
}

export function checkShopStatus(customDate?: Date): ShopState {
  const now = customDate || new Date();
  const currentDay = now.getDay();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentDateStr = getLocalDateString(now);
  const currentTimeStr = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const holidays = getHolidays();
  const forceStatus = getForceStatus();
  const forceReason = getForceReason();

  if (forceStatus === "open") {
    return {
      isOpen: true,
      type: "hours",
      currentDateStr,
      currentTimeStr,
      nextOpenStr: "",
      countdownSeconds: 0,
    };
  } else if (forceStatus === "closed") {
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(9, 0, 0, 0);
    const diff = Math.max(0, Math.floor((tomorrow.getTime() - now.getTime()) / 1000));
    return {
      isOpen: false,
      type: "force_close",
      currentDateStr,
      currentTimeStr,
      nextOpenStr: "Tomorrow at 9:00 AM",
      holidayReason: forceReason,
      countdownSeconds: diff,
    };
  }

  const matchingHoliday = holidays.find((h) => {
    return currentDateStr >= h.startDate && currentDateStr <= h.endDate;
  });

  if (matchingHoliday) {
    const endParts = matchingHoliday.endDate.split("-");
    const endDateObj = new Date(Number(endParts[0]), Number(endParts[1]) - 1, Number(endParts[2]));
    const nextOpenDayObj = new Date(endDateObj);
    nextOpenDayObj.setDate(nextOpenDayObj.getDate() + 1);
    if (nextOpenDayObj.getDay() === 0) {
      nextOpenDayObj.setDate(nextOpenDayObj.getDate() + 1);
    }
    nextOpenDayObj.setHours(9, 0, 0, 0);
    const diff = Math.max(0, Math.floor((nextOpenDayObj.getTime() - now.getTime()) / 1000));
    const formattedNextOpen =
      nextOpenDayObj.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }) + " at 9:00 AM";

    return {
      isOpen: false,
      type: "holiday",
      currentDateStr,
      currentTimeStr,
      nextOpenStr: formattedNextOpen,
      holidayReason: matchingHoliday.reason,
      countdownSeconds: diff,
    };
  }

  if (currentDay === 0) {
    const mondayObj = new Date(now);
    mondayObj.setDate(mondayObj.getDate() + 1);
    mondayObj.setHours(9, 0, 0, 0);
    const diff = Math.max(0, Math.floor((mondayObj.getTime() - now.getTime()) / 1000));
    return {
      isOpen: false,
      type: "sunday",
      currentDateStr,
      currentTimeStr,
      nextOpenStr: "Monday at 9:00 AM",
      holidayReason: "Shop Closed on Sundays",
      countdownSeconds: diff,
    };
  }

  const currentTotalMinutes = currentHours * 60 + currentMinutes;
  const openTimeMinutes = 9 * 60;
  const closeTimeMinutes = 20 * 60;

  if (currentTotalMinutes >= openTimeMinutes && currentTotalMinutes < closeTimeMinutes) {
    const closeToday = new Date(now);
    closeToday.setHours(20, 0, 0, 0);
    const diff = Math.max(0, Math.floor((closeToday.getTime() - now.getTime()) / 1000));
    return {
      isOpen: true,
      type: "hours",
      currentDateStr,
      currentTimeStr,
      nextOpenStr: "",
      countdownSeconds: diff,
    };
  } else {
    const isLate = currentTotalMinutes >= closeTimeMinutes;
    const nextOpen = new Date(now);
    if (isLate) {
      nextOpen.setDate(nextOpen.getDate() + 1);
    }
    if (nextOpen.getDay() === 0) {
      nextOpen.setDate(nextOpen.getDate() + 1);
    }
    nextOpen.setHours(9, 0, 0, 0);
    const diff = Math.max(0, Math.floor((nextOpen.getTime() - now.getTime()) / 1000));

    let nextOpenText = "Tomorrow at 9:00 AM";
    if (now.getDay() === 6 && isLate) {
      nextOpenText = "Monday at 9:00 AM";
    } else if (now.getDay() === 0) {
      nextOpenText = "Tomorrow (Monday) at 9:00 AM";
    }

    return {
      isOpen: false,
      type: "hours",
      currentDateStr,
      currentTimeStr,
      nextOpenStr: nextOpenText,
      holidayReason: "Shop Closed for the day",
      countdownSeconds: diff,
    };
  }
}
