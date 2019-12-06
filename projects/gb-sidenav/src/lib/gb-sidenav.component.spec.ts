import { GbSidenavItemsComponent } from './sidenav-items/gb-sidenav-items.component';
import { GbSidenavComponent } from './gb-sidenav.component';

describe('GbSidenavComponent', () => {
  let component: GbSidenavComponent;
  let componentItem: GbSidenavItemsComponent;
  beforeEach(() => {
    // mocks.state = jasmine.createSpyObj('$state', ['go']);
    component = new GbSidenavComponent();
    componentItem = new GbSidenavItemsComponent();
  });

  describe('ngOnChanges', () => {
    it('should update navigation changes', () => {
      // ARRANGE
      const oldValue = { name: 'oldValue' };
      const newValue = { name: 'newValue' };
      const changes = {
        navigation: {
          currentValue: newValue
        }
      };
      component.navigation = oldValue;
      // ACT
      component.ngOnChanges(changes);
      // ASSERT
      expect(component.navigation).toEqual(newValue);
    });
    it('should do nothing changes not related to navigation', () => {
      // ARRANGE
      const oldValue = { name: 'oldValue' };
      const changes = { otherProperty: {} };
      component.navigation = oldValue;
      // ACT
      component.ngOnChanges(changes);
      // ASSERT
      expect(component.navigation).toEqual(oldValue);
    });
  });
  describe('goToPage', () => {
    it('should go to state with params, when params provided', () => {
      // ARRANGE
      const sref = 'testSref';
      const params = { name: 'newValue' };

      // ACT
      component.goToPage({ sref, params });
      // ASSERT
      // expect(mocks.state.go).toHaveBeenCalledWith(sref, params);
    });
  });
});
