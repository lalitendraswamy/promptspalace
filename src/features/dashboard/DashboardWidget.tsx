import React from 'react';

interface DashboardWidgetProps {
  title: string;
  value: string | number;
}

const DashboardWidget: React.FC<DashboardWidgetProps> = ({ title, value }) => {
  return (
    <div className="dashboard-widget">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default DashboardWidget;
