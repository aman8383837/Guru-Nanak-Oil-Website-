// Mock tRPC implementation for the preview

export const trpc = {
  brands: {
    list: {
      useQuery: () => ({
        data: [
          { id: 1, name: "Castrol", description: "Premium liquid engineering" },
          { id: 2, name: "Elf", description: "Champion lubricants" },
          { id: 3, name: "Pensol", description: "High grade protection" },
          { id: 4, name: "Gulf", description: "Quality & performance" },
          { id: 5, name: "Kirloskar", description: "Heavy duty reliability" },
          { id: 6, name: "HP Lubricants", description: "Trusted high performance" },
          { id: 8, name: "Servo", description: "Long life lubrication" },
          { id: 9, name: "Bosch Filters", description: "Premium automotive filters" }
        ]
      })
    }
  },
  categories: {
    list: {
      useQuery: () => ({ data: [] })
    }
  }
};
