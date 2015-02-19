var $inject = [];

function HomeController() {
  this.title = "Homepage";
}

HomeController.$inject = $inject;
module.exports = HomeController;