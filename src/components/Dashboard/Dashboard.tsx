import StyledDash from './StyledDash';

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return <StyledDash>
    {children}
  </StyledDash>
};

export default Dashboard;
