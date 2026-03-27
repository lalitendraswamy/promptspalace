import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import DashboardWidget from '../features/dashboard/DashboardWidget';

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="page dashboard-page">
        <h1>Dashboard</h1>
        <div className="widget-grid">
          <DashboardWidget title="Total Users" value={1240} />
          <DashboardWidget title="Revenue" value="$8,430" />
          <DashboardWidget title="Active Sessions" value={432} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
