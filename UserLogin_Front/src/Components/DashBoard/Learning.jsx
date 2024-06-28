

const Learning = () => {
  const links = [
    {
      title: "React Documentation",
      url: "https://reactjs.org/docs/getting-started.html",
    },
    { title: "JavaScript Info", url: "https://javascript.info/" },
    { title: "CSS Tricks", url: "https://css-tricks.com/" },
    { title: "Tailwind CSS", url: "https://tailwindcss.com/" },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <a
              href={link.url}
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Learning;
