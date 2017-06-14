var expect = require('chai').expect
import PixelSpherePage from '../pages/pixelsphere.page'

describe('the PixelSphere home page', () => {
  it('should load', () => {
    browser.url('http://pixelsphere.org/');
    PixelSpherePage.windows_button.click()
    expect(PixelSpherePage.windows_modal.isExisting()).to.be.true;
    browser.debug()
  });
});