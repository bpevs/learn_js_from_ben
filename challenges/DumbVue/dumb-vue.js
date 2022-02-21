// PUBLIC
//–––––––

class Vue {
  constructor(options) {
    this.el = document.querySelector(options.el);
    this.directives = {};
    this.components = {};

    this.state = options.data;
    const children = getAllChildren(this.el);
    children
      .forEach(({ attributes }) => {
        toArray(attributes).forEach(({ name, value }) => {
          console.log(`${name} ${value}`);
        });
      });

    this.mount();
  }

  mount() {
    this.el.innerHTML = "<div>HELLO!</div>";
  }
}

Vue.directive = function (name, options) {};

Vue.component = function (name, options) {};

export { /* Dumb */ Vue };

// Private
//–––––––––

function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike || []);
}

// Wow look at this beautiful recursion.
// Makes you wanna throw up, huh?
function getAllChildren(el, children = []) {
  if (!el || !el.children) {
    return [];
  }

  toArray(el.children).forEach((child) => {
    children.push(child);
    getAllChildren(el.children, child);
  });

  return children;
}
