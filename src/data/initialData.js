export const INITIAL_DATA = {
  currentUser: {
    id: "1",
    name: "Benjamin Drzymalla",
    email: "benjamin@example.com"
  },
  users: [
    { id: "1", name: "Benjamin Drzymalla", email: "benjamin@example.com" },
    { id: "2", name: "Anna Smith", email: "anna@example.com" },
    { id: "3", name: "John Doe", email: "john@example.com" },
    { id: "4", name: "Sarah Wilson", email: "sarah@example.com" }
  ],
  lists: [
    {
      id: "1",
      title: "Weekend Groceries",
      ownerId: "1",
      members: ["1", "2"],
      items: [
        { id: "1", name: "Milk", quantity: 2, unit: "pcs", completed: false },
        { id: "2", name: "Bread", quantity: 1, unit: "pcs", completed: false },
        { id: "3", name: "Eggs", quantity: 12, unit: "pcs", completed: true },
        { id: "4", name: "Butter", quantity: 1, unit: "pcs", completed: false },
      ],
      archived: false,
      createdAt: "2025-10-29T12:00:00Z"
    },
    {
      id: "2",
      title: "Party Supplies",
      ownerId: "1",
      members: ["1", "2", "3"],
      items: [
        { id: "5", name: "Chips", quantity: 3, unit: "pcs", completed: false },
        { id: "6", name: "Soda", quantity: 6, unit: "pcs", completed: true },
      ],
      archived: false,
      createdAt: "2025-11-01T10:00:00Z"
    },
    {
      id: "3",
      title: "Office Supplies",
      ownerId: "1",
      members: ["1"],
      items: [
        { id: "7", name: "Paper", quantity: 1, unit: "pcs", completed: true },
        { id: "8", name: "Pens", quantity: 10, unit: "pcs", completed: true },
      ],
      archived: true,
      archivedAt: "2025-10-20T14:00:00Z",
      createdAt: "2025-10-15T09:00:00Z"
    }
  ]
};