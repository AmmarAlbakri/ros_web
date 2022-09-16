import DefaultDashboard from "./DefaultDashboard";

const Dashboard = (props) => {
  console.log(props);
  return (
    <div>
      <DefaultDashboard ros={props.ros} />
    </div>
  );
};

export default Dashboard;
