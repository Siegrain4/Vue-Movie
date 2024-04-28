export default {
  inserted(el, binding) {
    const clickOutside = (event) => {
      if (!el.contains(event.target)) {
        binding.value(event);
      }
    };
    document.addEventListener('click', clickOutside);
    el.__clickOutside = clickOutside;
  },
  unbind(el) {
    document.removeEventListener('click', el.__clickOutside);
    delete el.__clickOutside;
  }
};