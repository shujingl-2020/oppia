// Copyright 2016 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Directive for displaying the collection's owner name and
 * permissions.
 */

require('domain/utilities/url-interpolation.service.ts');
require(
  'pages/collection-editor-page/services/collection-editor-state.service.ts');

angular.module('oppia').directive('collectionPermissionsCard', [
  function() {
    return {
      restrict: 'E',
      scope: {},
      bindToController: {},
      template: require('./collection-permissions-card.directive.html'),
      controllerAs: '$ctrl',
      controller: [
        'CollectionEditorStateService',
        function(CollectionEditorStateService) {
          var ctrl = this;
          ctrl.hasPageLoaded = function() {
            return CollectionEditorStateService.hasLoadedCollection();
          };
          ctrl.$onInit = function() {
            ctrl.collectionRights =
              CollectionEditorStateService.getCollectionRights();
          };
        }
      ]
    };
  }]);

import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
@Directive({
  selector: 'collection-permissions-card'
})
export class CollectionPermissionsCard extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('collectionPermissionsCard', elementRef, injector);
  }
}
