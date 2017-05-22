$('.jsShowButton').click(function() {
    var self = $(this);
    self.closest('.c-land-content').next().toggle(300);
});
