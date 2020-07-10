/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const GeneralBasicOCRResponse = models.GeneralBasicOCRResponse;
const MLIDCardOCRRequest = models.MLIDCardOCRRequest;
const BankCardOCRRequest = models.BankCardOCRRequest;
const Coord = models.Coord;
const BankCardOCRResponse = models.BankCardOCRResponse;
const ItemCoord = models.ItemCoord;
const MLIDPassportOCRResponse = models.MLIDPassportOCRResponse;
const MLIDCardOCRResponse = models.MLIDCardOCRResponse;
const TextDetection = models.TextDetection;
const MLIDPassportOCRRequest = models.MLIDPassportOCRRequest;
const GeneralBasicOCRRequest = models.GeneralBasicOCRRequest;


/**
 * ocr client
 * @class
 */
class OcrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ocr.tencentcloudapi.com", "2018-11-19", credential, region, profile);
    }
    
    /**
     * This API is used to recognize a Malaysian identity card. Recognizable fields include identity card number, name, gender, and address. It has the features of cropping identity photos and alarming for photographed or photocopied documents.
This API is not fully available for the time being. For more information, please contact your [Tencent Cloud sales rep](https://cloud.tencent.com/about/connect).

     * @param {MLIDCardOCRRequest} req
     * @param {function(string, MLIDCardOCRResponse):void} cb
     * @public
     */
    MLIDCardOCR(req, cb) {
        let resp = new MLIDCardOCRResponse();
        this.request("MLIDCardOCR", req, resp, cb);
    }

    /**
     * This API is used to recognize a passport issued outside Mainland China. Recognizable fields include passport ID, name, date of birth, gender, expiration date, issuing country/region, and nationality. It has the features of cropping identity photos and alarming for spoofed or photocopied documents.
This API is not fully available for the time being. For more information, please contact your [Tencent Cloud sales rep](https://cloud.tencent.com/about/connect).
     * @param {MLIDPassportOCRRequest} req
     * @param {function(string, MLIDPassportOCRResponse):void} cb
     * @public
     */
    MLIDPassportOCR(req, cb) {
        let resp = new MLIDPassportOCRResponse();
        this.request("MLIDPassportOCR", req, resp, cb);
    }

    /**
     * This API is used to detect and recognize characters in an image in the following 19 languages: Chinese, English, Japanese, Korean, Spanish, French, German, Portuguese, Vietnamese, Malay, Russian, Italian, Dutch, Swedish, Finnish, Danish, Norwegian, Hungarian, and Thai. Mixed characters in English and each supported language can be recognized together.

It can recognize printed text in paper documents, online images, ads, signboards, menus, video titles, profile photos, etc.

Product strengths: it can automatically recognize the text language, return the text box coordinate information, and automatically rotate tilted text to the upright direction.

The differences between different editions of general print recognition are as detailed below:
<table style="width:715px">
      <thead>
        <tr>
          <th style="width:150px"></th>
          <th style="width:200px">**(Recommended)** General Print Recognition</th>
          <th ><a href="https://cloud.tencent.com/document/product/866/34937">**(Recommended)** General Print Recognition (High-Precision)</a></th>
          <th><a href="https://cloud.tencent.com/document/product/866/37831">General Print Recognition (Simplified)</a></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Use case</td>
          <td>It is suitable for recognition of printed text in all general scenarios</td>
          <td>It is suitable for content with high recognition difficulty such as a large number of characters, long strings of digits, small characters, blurry characters, and tilted text</td>
          <td>It is suitable for fast text recognition, which compromises the accuracy and recall rate but is more cost-effective</td>
        </tr>
        <tr>
          <td>Recognition accuracy rate</td>
          <td>96%</td>
          <td>99%</td>
          <td>91%</td>
        </tr>
        <tr>
          <td>Price</td>
          <td>Medium</td>
          <td>High</td>
          <td>Low</td>
        </tr>
        <tr>
          <td>Supported languages</td>
          <td>Chinese, English, Chinese-English, Japanese, Korean, Spanish, French, German, Portuguese, Vietnamese, Malay, Russian, Italian, Dutch, Swedish, Finnish, Danish, Norwegian, Hungarian, and Thai</td>
          <td>Chinese, English, and Chinese-English</td>
          <td>Chinese, English, and Chinese-English</td>
        </tr>
        <tr>
          <td>Automatic language detection</td>
          <td>Supported</td>
          <td>Supported</td>
          <td>Supported</td>
        </tr>
        <tr>
          <td>Return of text line coordinates</td>
          <td>Supported</td>
          <td>Supported</td>
          <td>Supported</td>
        </tr>
        <tr>
          <td>Automatic rotation correction</td>
          <td>Rotation recognition is supported, and the angle information can be returned</td>
          <td>Rotation recognition is supported, but no angle information can be returned</td>
          <td>Rotation recognition is supported, and the angle information can be returned</td>
        </tr>
      </tbody>
    </table>
     * @param {GeneralBasicOCRRequest} req
     * @param {function(string, GeneralBasicOCRResponse):void} cb
     * @public
     */
    GeneralBasicOCR(req, cb) {
        let resp = new GeneralBasicOCRResponse();
        this.request("GeneralBasicOCR", req, resp, cb);
    }

    /**
     * This API is used to detect and recognize key fields such as the card number, bank information, and expiration date on mainstream bank cards in Mainland China.
     * @param {BankCardOCRRequest} req
     * @param {function(string, BankCardOCRResponse):void} cb
     * @public
     */
    BankCardOCR(req, cb) {
        let resp = new BankCardOCRResponse();
        this.request("BankCardOCR", req, resp, cb);
    }


}
module.exports = OcrClient;
