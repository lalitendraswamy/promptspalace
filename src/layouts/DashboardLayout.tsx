import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <nav>
          <ul>
            <li><a href="/dashboard">Overview</a></li>
            <li><a href="/dashboard/analytics">Analytics</a></li>
            <li><a href="/dashboard/settings">Settings</a></li>
          </ul>
        </nav>
      </aside>
      <section className="dashboard-content">{children}</section>
    </div>
  );
};

export default DashboardLayout;
