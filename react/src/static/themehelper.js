(function () {
    var currentTheme;
  
    function changeTheme(inputTheme) {
      if (inputTheme === "dark") {
        const theme = themeConfig.dark;
        for (let key in theme) {
          setCSSVar(key, theme[key]);
        }
        localStorage.setItem("theme", inputTheme);
      } else {
        const theme = themeConfig.light;
        for (let key in theme) {
          setCSSVar(key, theme[key]);
        }
        localStorage.setItem("theme", inputTheme);
      }
    }
  
    function setCSSVar(property, color) {
      document.documentElement.setAttribute("data-bs-theme", localStorage.getItem("theme") || "light");
    }
    try {
      currentTheme = localStorage.getItem("theme") || "light";
  
      changeTheme(currentTheme);
    } catch (err) {
      console.log(new Error("accessing theme has been denied"));
    }
  })();