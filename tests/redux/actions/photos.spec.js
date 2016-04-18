import {expect} from 'chai';
import {List, Map} from 'immutable';

import {setPhotos, loadNextPhotos} from '../../../src/redux/actions/photos';

describe('(Redux Module) core', () => {
  describe('(Action Handler) setPhotos', () => {
    it('adds photos to the state', () => {
      const state = Map();
      const photos = Map({
        photos: List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
        entities: Map({
          photos: List.of(
            Map({"id": 1, "date": null, "title": "27095", "description": "", "dimensions": "2560x1920", "width": 2560, "height": 1920, "filename": "27095", "extension": "jpg", "layout": "landscape"}),
            Map({"id": 2, "date": "2014-01-11", "title": "0111141725", "description": "", "dimensions": "4160x2340", "width": 4160, "height": 2340, "filename": "0111141725", "extension": "jpg", "layout": "landscape"}),
            Map({"id": 3, "date": null, "title": "29481", "description": "", "dimensions": "2560x1920", "width": 2560, "height": 1920, "filename": "29481", "extension": "jpg", "layout": "landscape"}),
            Map({"id": 4, "date": "2013-11-08", "title": "1108132101", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1108132101", "extension": "jpg", "layout": "portrait"}),
            Map({"id": 5, "date": "2013-11-08", "title": "1108132326", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1108132326", "extension": "jpg", "layout": "portrait"}),
            Map({"id": 6, "date": "2013-11-08", "title": "1108132327", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1108132327", "extension": "jpg", "layout": "portrait"}),
            Map({"id": 7, "date": "2013-11-09", "title": "1109131027", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1109131027", "extension": "jpg", "layout": "portrait"}),
            Map({"id": 8, "date": "2013-11-09", "title": "1109131028", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1109131028", "extension": "jpg", "layout": "portrait"}),
            Map({"id": 9, "date": "2013-11-16", "title": "1116131019", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1116131019", "extension": "jpg", "layout": "portrait"}),
            Map({"id": 10, "date": "2013-11-16", "title": "1116131027", "description": "", "dimensions": "2560x1920", "width": 2560, "height": 1920, "filename": "1116131027", "extension": "jpg", "layout": "landscape"})
          )
        })
      });
      const nextState = setPhotos(state, photos);

      expect(nextState).to.equal(Map({
        photos: List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
        entities: Map({
          photos: List.of(
            Map({"id": 1, "date": null, "title": "27095", "description": "", "dimensions": "2560x1920", "width": 2560, "height": 1920, "filename": "27095", "extension": "jpg", "layout": "landscape"}),
            Map({"id": 2, "date": "2014-01-11", "title": "0111141725", "description": "", "dimensions": "4160x2340", "width": 4160, "height": 2340, "filename": "0111141725", "extension": "jpg", "layout": "landscape"}),
            Map({"id": 3, "date": null, "title": "29481", "description": "", "dimensions": "2560x1920", "width": 2560, "height": 1920, "filename": "29481", "extension": "jpg", "layout": "landscape"}),
            Map({"id": 4, "date": "2013-11-08", "title": "1108132101", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1108132101", "extension": "jpg", "layout": "portrait"}),
            Map({"id": 5, "date": "2013-11-08", "title": "1108132326", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1108132326", "extension": "jpg", "layout": "portrait"}),
            Map({"id": 6, "date": "2013-11-08", "title": "1108132327", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1108132327", "extension": "jpg", "layout": "portrait"}),
            Map({"id": 7, "date": "2013-11-09", "title": "1109131027", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1109131027", "extension": "jpg", "layout": "portrait"}),
            Map({"id": 8, "date": "2013-11-09", "title": "1109131028", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1109131028", "extension": "jpg", "layout": "portrait"}),
            Map({"id": 9, "date": "2013-11-16", "title": "1116131019", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1116131019", "extension": "jpg", "layout": "portrait"}),
            Map({"id": 10, "date": "2013-11-16", "title": "1116131027", "description": "", "dimensions": "2560x1920", "width": 2560, "height": 1920, "filename": "1116131027", "extension": "jpg", "layout": "landscape"})
          )
        })
      }))
    });

    it('converts to immutable', () => {
      const state = Map();
      const photos = {
        photos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        entities: {
          photos: [
            {"id": 1, "date": null, "title": "27095", "description": "", "dimensions": "2560x1920", "width": 2560, "height": 1920, "filename": "27095", "extension": "jpg", "layout": "landscape"},
            {"id": 2, "date": "2014-01-11", "title": "0111141725", "description": "", "dimensions": "4160x2340", "width": 4160, "height": 2340, "filename": "0111141725", "extension": "jpg", "layout": "landscape"},
            {"id": 3, "date": null, "title": "29481", "description": "", "dimensions": "2560x1920", "width": 2560, "height": 1920, "filename": "29481", "extension": "jpg", "layout": "landscape"},
            {"id": 4, "date": "2013-11-08", "title": "1108132101", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1108132101", "extension": "jpg", "layout": "portrait"},
            {"id": 5, "date": "2013-11-08", "title": "1108132326", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1108132326", "extension": "jpg", "layout": "portrait"},
            {"id": 6, "date": "2013-11-08", "title": "1108132327", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1108132327", "extension": "jpg", "layout": "portrait"},
            {"id": 7, "date": "2013-11-09", "title": "1109131027", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1109131027", "extension": "jpg", "layout": "portrait"},
            {"id": 8, "date": "2013-11-09", "title": "1109131028", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1109131028", "extension": "jpg", "layout": "portrait"},
            {"id": 9, "date": "2013-11-16", "title": "1116131019", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1116131019", "extension": "jpg", "layout": "portrait"},
            {"id": 10, "date": "2013-11-16", "title": "1116131027", "description": "", "dimensions": "2560x1920", "width": 2560, "height": 1920, "filename": "1116131027", "extension": "jpg", "layout": "landscape"}
          ]
        }
      };
      const nextState = setPhotos(state, photos);

      expect(nextState).to.equal(Map({
        photos: List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
        entities: Map({
          photos: List.of(
            Map({"id": 1, "date": null, "title": "27095", "description": "", "dimensions": "2560x1920", "width": 2560, "height": 1920, "filename": "27095", "extension": "jpg", "layout": "landscape"}),
            Map({"id": 2, "date": "2014-01-11", "title": "0111141725", "description": "", "dimensions": "4160x2340", "width": 4160, "height": 2340, "filename": "0111141725", "extension": "jpg", "layout": "landscape"}),
            Map({"id": 3, "date": null, "title": "29481", "description": "", "dimensions": "2560x1920", "width": 2560, "height": 1920, "filename": "29481", "extension": "jpg", "layout": "landscape"}),
            Map({"id": 4, "date": "2013-11-08", "title": "1108132101", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1108132101", "extension": "jpg", "layout": "portrait"}),
            Map({"id": 5, "date": "2013-11-08", "title": "1108132326", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1108132326", "extension": "jpg", "layout": "portrait"}),
            Map({"id": 6, "date": "2013-11-08", "title": "1108132327", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1108132327", "extension": "jpg", "layout": "portrait"}),
            Map({"id": 7, "date": "2013-11-09", "title": "1109131027", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1109131027", "extension": "jpg", "layout": "portrait"}),
            Map({"id": 8, "date": "2013-11-09", "title": "1109131028", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1109131028", "extension": "jpg", "layout": "portrait"}),
            Map({"id": 9, "date": "2013-11-16", "title": "1116131019", "description": "", "dimensions": "1920x2560", "width": 1920, "height": 2560, "filename": "1116131019", "extension": "jpg", "layout": "portrait"}),
            Map({"id": 10, "date": "2013-11-16", "title": "1116131027", "description": "", "dimensions": "2560x1920", "width": 2560, "height": 1920, "filename": "1116131027", "extension": "jpg", "layout": "landscape"})
          )
        })
      }));
    });
  });

  describe('(Action Handler) loadNextPhotos', () => {
    it('takes the next photos under gallery', () => {
      const state = Map({
        photos: List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30)
      });
      const nextState = loadNextPhotos(state);

      expect(nextState).to.equal(Map({
        photos: List.of(21, 22, 23, 24, 25, 26, 27, 28, 29, 30),
        gallery: List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20)
      }));
    });

    it('moves quantity passed to it', () => {
      const state = Map({
        photos: List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30)
      });
      const nextState = loadNextPhotos(state, 10);

      expect(nextState).to.equal(Map({
        photos: List.of(11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30),
        gallery: List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      }));
    });
  });
});