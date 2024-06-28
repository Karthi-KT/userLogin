const Announcements = () => {
  const announcements = [
    {
      title: "Summer Training",
      description: "Internship with Live Projects",
      time: "2 minutes ago",
    },
    {
      title: "Global Internship",
      description: "Opportunity by Student Organization",
      time: "10 minutes ago",
    },
    {
      title: "Mid Term Examination",
      description: "Instructions",
      time: "Yesterday",
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Announcements</h2>
      <ul>
        {announcements.map((announcement, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-md font-medium">{announcement.title}</h3>
            <p className="text-sm text-gray-500">{announcement.description}</p>
            <p className="text-xs text-gray-400">{announcement.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
