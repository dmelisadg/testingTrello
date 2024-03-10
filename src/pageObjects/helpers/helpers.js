const helpers = () => {
  async function oneSign (selector) {
    return await $(selector);
  }

  async function doubleSign (selector) {
    return await $$(selector);
  }
  return {
    oneSign,
    doubleSign
  };
};

module.exports = { helpers };
