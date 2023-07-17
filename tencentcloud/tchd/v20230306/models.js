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
const AbstractModel = require("../../common/abstract_model");

/**
 * Describes information on an event.
 * @class
 */
class EventDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product ID.
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Product name.
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * Region ID.
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Region name.
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Event start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Event end time. If the event is still ongoing and has not ended, the end time will be empty.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Current status: Normally, Informational, Degradation.
         * @type {string || null}
         */
        this.CurrentStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CurrentStatus = 'CurrentStatus' in params ? params.CurrentStatus : null;

    }
}

/**
 * DescribeEvents response structure.
 * @class
 */
class DescribeEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Detailed event information.
         * @type {ProductEventList || null}
         */
        this.Data = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new ProductEventList();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEvents request structure.
 * @class
 */
class DescribeEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * event occurrence date
         * @type {string || null}
         */
        this.EventDate = null;

        /**
         * Query by Product ID(s). Product ID examples: cvm, lb, cdb, cdn, crs.
         * @type {Array.<string> || null}
         */
        this.ProductIds = null;

        /**
         *  1. Query by Region ID(s). Region ID examples: ap-guangzhou、ap-shanghai、ap-singapore.
2. The region ID for non-region-specific products should be set to non-regional.
         * @type {Array.<string> || null}
         */
        this.RegionIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventDate = 'EventDate' in params ? params.EventDate : null;
        this.ProductIds = 'ProductIds' in params ? params.ProductIds : null;
        this.RegionIds = 'RegionIds' in params ? params.RegionIds : null;

    }
}

/**
 * Detailed event information.
 * @class
 */
class ProductEventList extends  AbstractModel {
    constructor(){
        super();

        /**
         * Detailed event information.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {Array.<EventDetail> || null}
         */
        this.EventList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EventList) {
            this.EventList = new Array();
            for (let z in params.EventList) {
                let obj = new EventDetail();
                obj.deserialize(params.EventList[z]);
                this.EventList.push(obj);
            }
        }

    }
}

module.exports = {
    EventDetail: EventDetail,
    DescribeEventsResponse: DescribeEventsResponse,
    DescribeEventsRequest: DescribeEventsRequest,
    ProductEventList: ProductEventList,

}
