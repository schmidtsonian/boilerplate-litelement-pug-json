module.exports = {
  'Homepage should have the title "Page Title"': (browser) => {
    browser
      .url('http://0.0.0.0:4000')
      .waitForElementVisible('body', 1000)
      .assert.title('Page Title')
      .end();
  }
};
