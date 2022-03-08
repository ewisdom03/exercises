function parent(x) {

    const remember = parent("remembers me");
    // Seems like the variable x would be gone after
    // parent is executed, but it's not.


  return function closure() {
    // Closure is declared here.
    return x;

  }
    closure();
    // Returns "remembers me" because the inner
    // function remembers x.
};

