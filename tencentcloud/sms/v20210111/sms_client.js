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
const SmsPackagesStatisticsRequest = models.SmsPackagesStatisticsRequest;
const SmsPackagesStatistics = models.SmsPackagesStatistics;
const SmsPackagesStatisticsResponse = models.SmsPackagesStatisticsResponse;


/**
 * sms client
 * @class
 */
class SmsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("sms.tencentcloudapi.com", "2021-01-11", credential, region, profile);
    }
    
    /**
     * This API is used to collect statistics on a user's packages.
>- Note: because of the improved security of **TencentCloud API 3.0**, **API authentication** is more complicated. We recommend you use the Tencent Cloud SMS service with the SDK.
>- You can run this API directly in [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms), which eliminates the signature calculation steps. After it is executed successfully, API Explorer can **automatically generate** SDK code samples.

     * @param {SmsPackagesStatisticsRequest} req
     * @param {function(string, SmsPackagesStatisticsResponse):void} cb
     * @public
     */
    SmsPackagesStatistics(req, cb) {
        let resp = new SmsPackagesStatisticsResponse();
        this.request("SmsPackagesStatistics", req, resp, cb);
    }


}
module.exports = SmsClient;
