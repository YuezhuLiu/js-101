const logInBox = (message, maxWidth = 0) => {
  const boxLength = maxWidth ? maxWidth : message.length + 2;
  let ban = `+${"-".repeat(boxLength)}+`;
  let spaces = `|${" ".repeat(boxLength)}|`;

  console.log(`${ban}\n${spaces}`);

  while (boxLength < message.length + 1) {
    console.log(`| ${message.slice(0, boxLength - 2)} |`);
    message = message.slice(boxLength - 3);
  }
  console.log(`| ${message.padEnd(boxLength - 2, ' ')} |\n${spaces}\n${ban}`);
};

logInBox('To boldly go where no one has gone before.');
logInBox(('JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.). There are also more advanced server side versions of JavaScript such as Node.js, which allow you to add more functionality to a website than downloading files (such as realtime collaboration between multiple computers). Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.'), 25);
