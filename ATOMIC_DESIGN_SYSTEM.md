# Atomic Design System for the Platform

## 1. Atoms
Atoms are the smallest building blocks of the design system.

### Examples:
- **Button**:
  - Variants: Primary, Secondary, Outline.
  - Sizes: Small, Medium, Large.
  ```tsx
  <Button variant="primary" size="medium">Click Me</Button>
  ```

- **Badge**:
  - Status indicators: "New", "Qualified", "Contacted".
  ```tsx
  <Badge variant="success">Qualified</Badge>
  ```

- **Typography**:
  - Headings, body text, captions.
  ```tsx
  <h1 className="text-2xl font-bold">Dashboard</h1>
  ```

---

## 2. Molecules
Molecules are combinations of atoms that work together as a unit.

### Examples:
- **StatsCard**:
  - Displays a title, value, and optional change indicator.
  ```tsx
  <StatsCard title="New Leads" value="8" icon={<Icon />} change={{ value: 5, type: 'increase' }} />
  ```

- **Tabs**:
  - A group of tab triggers and content areas.
  ```tsx
  <Tabs>
    <TabsList>
      <TabsTrigger value="all">All</TabsTrigger>
      <TabsTrigger value="active">Active</TabsTrigger>
    </TabsList>
    <TabsContent value="all">All Content</TabsContent>
  </Tabs>
  ```

- **SearchBar**:
  - Input field with a search icon.
  ```tsx
  <div className="relative">
    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2" />
    <Input placeholder="Search..." className="pl-10" />
  </div>
  ```

---

## 3. Organisms
Organisms are more complex components made up of molecules and/or atoms.

### Examples:
- **Sidebar**:
  - A collapsible navigation menu with links to all pages.
  ```tsx
  <Sidebar>
    <SidebarItem href="/dashboard">Dashboard</SidebarItem>
    <SidebarItem href="/leads">Leads</SidebarItem>
  </Sidebar>
  ```

- **DashboardHeader**:
  - Combines a title, subtitle, and action buttons.
  ```tsx
  <DashboardHeader title="Welcome" subtitle="Overview of your platform">
    <Button>Add New</Button>
  </DashboardHeader>
  ```

- **ActivityFeed**:
  - A list of recent activities or updates.
  ```tsx
  <ActivityFeed>
    <ActivityItem title="New Lead Added" timestamp="2 hours ago" />
  </ActivityFeed>
  ```

---

## 4. Templates
Templates define the layout and structure of a page without specific content.

### Examples:
- **DashboardTemplate**:
  - Sidebar, header, and main content area.
  ```tsx
  <DashboardTemplate>
    <StatsCard title="New Leads" value="8" />
    <ActivityFeed />
  </DashboardTemplate>
  ```

- **GridTemplate**:
  - A grid layout for cards or other components.
  ```tsx
  <GridTemplate>
    <Card>Card 1</Card>
    <Card>Card 2</Card>
  </GridTemplate>
  ```

---

## 5. Pages
Pages are specific implementations of templates with real content.

### Examples:
- **Dashboard**:
  - Combines stats, activity feed, and quick links.
  ```tsx
  <DashboardTemplate>
    <StatsCard title="New Leads" value="8" />
    <ActivityFeed />
  </DashboardTemplate>
  ```

- **Leads**:
  - Displays lead cards with filters and search.
  ```tsx
  <LeadsTemplate>
    <LeadCard name="John Doe" status="New" />
  </LeadsTemplate>
  ```

- **Analytics**:
  - Visualizes data with charts and graphs.
  ```tsx
  <AnalyticsTemplate>
    <Chart data={data} />
  </AnalyticsTemplate>
  ```

---

This document will be updated as the platform evolves to ensure consistency and scalability.
