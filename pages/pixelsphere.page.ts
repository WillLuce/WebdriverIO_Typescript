
class PixelSphere_Page {
  public get container() { return browser.element('.container') }
  public get windows_button () { return browser.element('a.btn-success') }
  public get windows_modal () { return browser.element('.modal-body') }
}
const PixelSpherePage = new PixelSphere_Page();
export default PixelSpherePage;