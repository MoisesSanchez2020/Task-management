
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        {/* Add your header content here */}
      </div>
      <nav className="sidebar-nav">
        <button className="nav-item">Inbox</button>
        <button className="nav-item">Today</button>
        <button className="nav-item">Upcoming</button>
        <button className="nav-item">Important</button>
        <button className="nav-item">Meetings</button>
        <button className="nav-item">Trash</button>
        <div className="nav-section-title">Categories</div>
        <button className="nav-item">Family</button>
        <button className="nav-item">Vacation</button>
        <button className="nav-item">Festival</button>
        <button className="nav-item">Concerts</button>
      </nav>
    </aside>
  );
};

export default Sidebar;
