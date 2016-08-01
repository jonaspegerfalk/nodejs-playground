/**
 * GET /
 * Home page.
 */
exports.getAdminIndex = (req, res) => {
  res.render('admin', {
    title: 'Home'
  });
};
