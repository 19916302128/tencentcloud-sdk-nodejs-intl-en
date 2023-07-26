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
const QueryDirectCustomersCreditResponse = models.QueryDirectCustomersCreditResponse;
const QueryPartnerCreditResponse = models.QueryPartnerCreditResponse;
const QueryVoucherListByUinRequest = models.QueryVoucherListByUinRequest;
const QueryVoucherAmountByUinResponse = models.QueryVoucherAmountByUinResponse;
const QueryVoucherAmountByUinItem = models.QueryVoucherAmountByUinItem;
const QueryCreditAllocationHistoryData = models.QueryCreditAllocationHistoryData;
const DescribeBillSummaryByPayModeResponse = models.DescribeBillSummaryByPayModeResponse;
const QueryCreditQuotaResponse = models.QueryCreditQuotaResponse;
const QueryVoucherListByUinItem = models.QueryVoucherListByUinItem;
const DescribeBillSummaryByProductResponse = models.DescribeBillSummaryByProductResponse;
const QueryPartnerCreditRequest = models.QueryPartnerCreditRequest;
const AllocateCustomerCreditRequest = models.AllocateCustomerCreditRequest;
const DescribeBillSummaryByRegionResponse = models.DescribeBillSummaryByRegionResponse;
const DescribeCustomerBillSummaryResponse = models.DescribeCustomerBillSummaryResponse;
const QueryCustomersCreditRequest = models.QueryCustomersCreditRequest;
const DescribeBillDetailRequest = models.DescribeBillDetailRequest;
const QueryCreditByUinListRequest = models.QueryCreditByUinListRequest;
const CreateAccountResponse = models.CreateAccountResponse;
const QueryAccountVerificationStatusResponse = models.QueryAccountVerificationStatusResponse;
const RegionSummaryOverviewItem = models.RegionSummaryOverviewItem;
const CustomerBillDetailData = models.CustomerBillDetailData;
const GetCountryCodesResponse = models.GetCountryCodesResponse;
const QueryCreditByUinListResponse = models.QueryCreditByUinListResponse;
const DescribeCustomerInfoResponse = models.DescribeCustomerInfoResponse;
const BusinessSummaryOverviewItem = models.BusinessSummaryOverviewItem;
const DescribeCustomerUinData = models.DescribeCustomerUinData;
const DescribeCustomerUinResponse = models.DescribeCustomerUinResponse;
const DescribeBillSummaryByRegionRequest = models.DescribeBillSummaryByRegionRequest;
const QueryVoucherPoolResponse = models.QueryVoucherPoolResponse;
const DescribeCustomerBillDetailRequest = models.DescribeCustomerBillDetailRequest;
const DescribeCustomerBillDetailResponse = models.DescribeCustomerBillDetailResponse;
const QueryAccountVerificationStatusRequest = models.QueryAccountVerificationStatusRequest;
const QueryCreditAllocationHistoryResponse = models.QueryCreditAllocationHistoryResponse;
const CreateAccountRequest = models.CreateAccountRequest;
const DescribeBillSummaryByPayModeRequest = models.DescribeBillSummaryByPayModeRequest;
const ActionSummaryOverviewItem = models.ActionSummaryOverviewItem;
const DescribeCustomerInfoRequest = models.DescribeCustomerInfoRequest;
const QueryCreditQuotaRequest = models.QueryCreditQuotaRequest;
const AllocateCustomerCreditResponse = models.AllocateCustomerCreditResponse;
const QueryVoucherListByUinVoucherItem = models.QueryVoucherListByUinVoucherItem;
const DescribeBillSummaryByProductRequest = models.DescribeBillSummaryByProductRequest;
const QueryDirectCustomersCreditData = models.QueryDirectCustomersCreditData;
const GetCountryCodesRequest = models.GetCountryCodesRequest;
const CountryCodeItem = models.CountryCodeItem;
const BillDetailData = models.BillDetailData;
const DescribeBillDetailResponse = models.DescribeBillDetailResponse;
const QueryCreditAllocationHistoryRequest = models.QueryCreditAllocationHistoryRequest;
const QueryCustomersCreditResponse = models.QueryCustomersCreditResponse;
const DescribeCustomerUinRequest = models.DescribeCustomerUinRequest;
const QueryVoucherListByUinResponse = models.QueryVoucherListByUinResponse;
const QueryVoucherPoolRequest = models.QueryVoucherPoolRequest;
const DescribeCustomerInfoData = models.DescribeCustomerInfoData;
const QueryVoucherAmountByUinRequest = models.QueryVoucherAmountByUinRequest;
const PayModeSummaryOverviewItem = models.PayModeSummaryOverviewItem;
const QueryCustomersCreditData = models.QueryCustomersCreditData;
const DescribeCustomerBillSummaryRequest = models.DescribeCustomerBillSummaryRequest;
const QueryDirectCustomersCreditRequest = models.QueryDirectCustomersCreditRequest;


/**
 * intlpartnersmgt client
 * @class
 */
class IntlpartnersmgtClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("intlpartnersmgt.tencentcloudapi.com", "2022-09-28", credential, region, profile);
    }
    
    /**
     * This API is used to query the credit of users in the list.
     * @param {QueryCreditByUinListRequest} req
     * @param {function(string, QueryCreditByUinListResponse):void} cb
     * @public
     */
    QueryCreditByUinList(req, cb) {
        let resp = new QueryCreditByUinListResponse();
        this.request("QueryCreditByUinList", req, resp, cb);
    }

    /**
     * This API is used to query the voucher quota pool.
     * @param {QueryVoucherPoolRequest} req
     * @param {function(string, QueryVoucherPoolResponse):void} cb
     * @public
     */
    QueryVoucherPool(req, cb) {
        let resp = new QueryVoucherPoolResponse();
        this.request("QueryVoucherPool", req, resp, cb);
    }

    /**
     * This API is used to query the customer information.
     * @param {DescribeCustomerInfoRequest} req
     * @param {function(string, DescribeCustomerInfoResponse):void} cb
     * @public
     */
    DescribeCustomerInfo(req, cb) {
        let resp = new DescribeCustomerInfoResponse();
        this.request("DescribeCustomerInfo", req, resp, cb);
    }

    /**
     * This API is used to create a Tencent Cloud account on the partner platform for a customer. After registration, the customer will be automatically bound to the partner account.

Notes:<br>
1. The partner should verify the entered email address and mobile number for creating a Tencent Cloud account.<br>
2. The customer needs to complete personal information after the first login.
     * @param {CreateAccountRequest} req
     * @param {function(string, CreateAccountResponse):void} cb
     * @public
     */
    CreateAccount(req, cb) {
        let resp = new CreateAccountResponse();
        this.request("CreateAccount", req, resp, cb);
    }

    /**
     * This API is used to query the voucher list based on the customer UIN.
     * @param {QueryVoucherListByUinRequest} req
     * @param {function(string, QueryVoucherListByUinResponse):void} cb
     * @public
     */
    QueryVoucherListByUin(req, cb) {
        let resp = new QueryVoucherListByUinResponse();
        this.request("QueryVoucherListByUin", req, resp, cb);
    }

    /**
     * This API is used to query the list of customer UINs.
     * @param {DescribeCustomerUinRequest} req
     * @param {function(string, DescribeCustomerUinResponse):void} cb
     * @public
     */
    DescribeCustomerUin(req, cb) {
        let resp = new DescribeCustomerUinResponse();
        this.request("DescribeCustomerUin", req, resp, cb);
    }

    /**
     * This API is used for a partner to query its own total credit, available credit, and used credit in USD.
     * @param {QueryPartnerCreditRequest} req
     * @param {function(string, QueryPartnerCreditResponse):void} cb
     * @public
     */
    QueryPartnerCredit(req, cb) {
        let resp = new QueryPartnerCreditResponse();
        this.request("QueryPartnerCredit", req, resp, cb);
    }

    /**
     * This API is used for a partner to set credit for a customer, such as increasing or lowering the credit and setting it to 0.
1. The credit is valid permanently and will not be zeroed regularly.
2. The customer's service will be suspended when its available credit is set to 0, so caution should be exercised with this operation.
3. To prevent the customer from making new purchases without affecting their use of previously purchased products, the partner can set their available credit to 0 after obtaining the non-stop feature privilege from the channel manager.
4. The set credit is an increment of the current available credit and cannot exceed the remaining allocable credit. Setting the credit to a negative value indicates that it will be repossessed. The available credit can be set to 0 at the minimum.
     * @param {AllocateCustomerCreditRequest} req
     * @param {function(string, AllocateCustomerCreditResponse):void} cb
     * @public
     */
    AllocateCustomerCredit(req, cb) {
        let resp = new AllocateCustomerCreditResponse();
        this.request("AllocateCustomerCredit", req, resp, cb);
    }

    /**
     * This API is used to query the customer bill details.
     * @param {DescribeBillDetailRequest} req
     * @param {function(string, DescribeBillDetailResponse):void} cb
     * @public
     */
    DescribeBillDetail(req, cb) {
        let resp = new DescribeBillDetailResponse();
        this.request("DescribeBillDetail", req, resp, cb);
    }

    /**
     * This API is used to query the voucher quota based on the customer UIN.
     * @param {QueryVoucherAmountByUinRequest} req
     * @param {function(string, QueryVoucherAmountByUinResponse):void} cb
     * @public
     */
    QueryVoucherAmountByUin(req, cb) {
        let resp = new QueryVoucherAmountByUinResponse();
        this.request("QueryVoucherAmountByUin", req, resp, cb);
    }

    /**
     * This API is used to obtain the total amount of customer bills by payment mode.
     * @param {DescribeBillSummaryByPayModeRequest} req
     * @param {function(string, DescribeBillSummaryByPayModeResponse):void} cb
     * @public
     */
    DescribeBillSummaryByPayMode(req, cb) {
        let resp = new DescribeBillSummaryByPayModeResponse();
        this.request("DescribeBillSummaryByPayMode", req, resp, cb);
    }

    /**
     * This API is used to obtain country/region codes.
     * @param {GetCountryCodesRequest} req
     * @param {function(string, GetCountryCodesResponse):void} cb
     * @public
     */
    GetCountryCodes(req, cb) {
        let resp = new GetCountryCodesResponse();
        this.request("GetCountryCodes", req, resp, cb);
    }

    /**
     * This API is used for a partner to the credits and basic information of cutomers.
     * @param {QueryCustomersCreditRequest} req
     * @param {function(string, QueryCustomersCreditResponse):void} cb
     * @public
     */
    QueryCustomersCredit(req, cb) {
        let resp = new QueryCustomersCreditResponse();
        this.request("QueryCustomersCredit", req, resp, cb);
    }

    /**
     * This API is used to query the credits of direct customers.
     * @param {QueryDirectCustomersCreditRequest} req
     * @param {function(string, QueryDirectCustomersCreditResponse):void} cb
     * @public
     */
    QueryDirectCustomersCredit(req, cb) {
        let resp = new QueryDirectCustomersCreditResponse();
        this.request("QueryDirectCustomersCredit", req, resp, cb);
    }

    /**
     * This API is used to query all the credit allocation records of a single customer.
     * @param {QueryCreditAllocationHistoryRequest} req
     * @param {function(string, QueryCreditAllocationHistoryResponse):void} cb
     * @public
     */
    QueryCreditAllocationHistory(req, cb) {
        let resp = new QueryCreditAllocationHistoryResponse();
        this.request("QueryCreditAllocationHistory", req, resp, cb);
    }

    /**
     * This API is used to obtain the total amount of customer bills by region.
     * @param {DescribeBillSummaryByRegionRequest} req
     * @param {function(string, DescribeBillSummaryByRegionResponse):void} cb
     * @public
     */
    DescribeBillSummaryByRegion(req, cb) {
        let resp = new DescribeBillSummaryByRegionResponse();
        this.request("DescribeBillSummaryByRegion", req, resp, cb);
    }

    /**
     * This API is used to query the customer bill details.
     * @param {DescribeCustomerBillDetailRequest} req
     * @param {function(string, DescribeCustomerBillDetailResponse):void} cb
     * @public
     */
    DescribeCustomerBillDetail(req, cb) {
        let resp = new DescribeCustomerBillDetailResponse();
        this.request("DescribeCustomerBillDetail", req, resp, cb);
    }

    /**
     * This API is used to query the total amount of customer bills.
     * @param {DescribeCustomerBillSummaryRequest} req
     * @param {function(string, DescribeCustomerBillSummaryResponse):void} cb
     * @public
     */
    DescribeCustomerBillSummary(req, cb) {
        let resp = new DescribeCustomerBillSummaryResponse();
        this.request("DescribeCustomerBillSummary", req, resp, cb);
    }

    /**
     * This API is used to obtain the total amount of customer bills by product.
     * @param {DescribeBillSummaryByProductRequest} req
     * @param {function(string, DescribeBillSummaryByProductResponse):void} cb
     * @public
     */
    DescribeBillSummaryByProduct(req, cb) {
        let resp = new DescribeBillSummaryByProductResponse();
        this.request("DescribeBillSummaryByProduct", req, resp, cb);
    }

    /**
     * This API is used to query the account verification status.
     * @param {QueryAccountVerificationStatusRequest} req
     * @param {function(string, QueryAccountVerificationStatusResponse):void} cb
     * @public
     */
    QueryAccountVerificationStatus(req, cb) {
        let resp = new QueryAccountVerificationStatusResponse();
        this.request("QueryAccountVerificationStatus", req, resp, cb);
    }

    /**
     * This API is used to query customer credits.
     * @param {QueryCreditQuotaRequest} req
     * @param {function(string, QueryCreditQuotaResponse):void} cb
     * @public
     */
    QueryCreditQuota(req, cb) {
        let resp = new QueryCreditQuotaResponse();
        this.request("QueryCreditQuota", req, resp, cb);
    }


}
module.exports = IntlpartnersmgtClient;
