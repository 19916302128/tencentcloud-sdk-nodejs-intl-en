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
const CreateDefaultAlarmThresholdRequest = models.CreateDefaultAlarmThresholdRequest;
const DescribeListBGPIPInstancesResponse = models.DescribeListBGPIPInstancesResponse;
const DescribeBlackWhiteIpListResponse = models.DescribeBlackWhiteIpListResponse;
const ProxyTypeInfo = models.ProxyTypeInfo;
const CreateBoundIPRequest = models.CreateBoundIPRequest;
const DescribeListSchedulingDomainRequest = models.DescribeListSchedulingDomainRequest;
const CreateWaterPrintConfigRequest = models.CreateWaterPrintConfigRequest;
const DDoSGeoIPBlockConfig = models.DDoSGeoIPBlockConfig;
const CreateBlackWhiteIpListResponse = models.CreateBlackWhiteIpListResponse;
const IPAlarmThresholdRelation = models.IPAlarmThresholdRelation;
const ModifyDDoSGeoIPBlockConfigRequest = models.ModifyDDoSGeoIPBlockConfigRequest;
const DescribeL7RulesBySSLCertIdResponse = models.DescribeL7RulesBySSLCertIdResponse;
const DescribeListDDoSSpeedLimitConfigRequest = models.DescribeListDDoSSpeedLimitConfigRequest;
const InstanceRelation = models.InstanceRelation;
const DescribeListProtocolBlockConfigResponse = models.DescribeListProtocolBlockConfigResponse;
const DescribeListBGPInstancesRequest = models.DescribeListBGPInstancesRequest;
const SwitchWaterPrintConfigRequest = models.SwitchWaterPrintConfigRequest;
const DeleteDDoSSpeedLimitConfigRequest = models.DeleteDDoSSpeedLimitConfigRequest;
const CreatePacketFilterConfigResponse = models.CreatePacketFilterConfigResponse;
const CreateL7RuleCertsRequest = models.CreateL7RuleCertsRequest;
const DescribeListSchedulingDomainResponse = models.DescribeListSchedulingDomainResponse;
const CreateIPAlarmThresholdConfigRequest = models.CreateIPAlarmThresholdConfigRequest;
const DescribeDefaultAlarmThresholdResponse = models.DescribeDefaultAlarmThresholdResponse;
const CreateDDoSAIRequest = models.CreateDDoSAIRequest;
const DescribeListProtectThresholdConfigRequest = models.DescribeListProtectThresholdConfigRequest;
const CreateWaterPrintConfigResponse = models.CreateWaterPrintConfigResponse;
const DescribeListBGPIPInstancesRequest = models.DescribeListBGPIPInstancesRequest;
const StaticPackRelation = models.StaticPackRelation;
const DescribeL7RulesBySSLCertIdRequest = models.DescribeL7RulesBySSLCertIdRequest;
const DescribeListPacketFilterConfigResponse = models.DescribeListPacketFilterConfigResponse;
const DeleteBlackWhiteIpListResponse = models.DeleteBlackWhiteIpListResponse;
const CreateSchedulingDomainRequest = models.CreateSchedulingDomainRequest;
const BoundIpInfo = models.BoundIpInfo;
const DisassociateDDoSEipAddressResponse = models.DisassociateDDoSEipAddressResponse;
const BGPIPInstance = models.BGPIPInstance;
const DeleteBlackWhiteIpListRequest = models.DeleteBlackWhiteIpListRequest;
const SourceServer = models.SourceServer;
const ModifyDomainUsrNameResponse = models.ModifyDomainUsrNameResponse;
const DisassociateDDoSEipAddressRequest = models.DisassociateDDoSEipAddressRequest;
const BlackWhiteIpRelation = models.BlackWhiteIpRelation;
const DeleteWaterPrintKeyResponse = models.DeleteWaterPrintKeyResponse;
const EipAddressPackRelation = models.EipAddressPackRelation;
const ProtocolBlockRelation = models.ProtocolBlockRelation;
const DescribeListPacketFilterConfigRequest = models.DescribeListPacketFilterConfigRequest;
const BGPIPInstanceUsages = models.BGPIPInstanceUsages;
const ModifyPacketFilterConfigResponse = models.ModifyPacketFilterConfigResponse;
const DescribeListDDoSGeoIPBlockConfigRequest = models.DescribeListDDoSGeoIPBlockConfigRequest;
const Layer7Rule = models.Layer7Rule;
const CreateDDoSSpeedLimitConfigRequest = models.CreateDDoSSpeedLimitConfigRequest;
const CreateDDoSGeoIPBlockConfigRequest = models.CreateDDoSGeoIPBlockConfigRequest;
const CreateProtocolBlockConfigRequest = models.CreateProtocolBlockConfigRequest;
const DeleteWaterPrintKeyRequest = models.DeleteWaterPrintKeyRequest;
const AssociateDDoSEipAddressResponse = models.AssociateDDoSEipAddressResponse;
const DDoSSpeedLimitConfigRelation = models.DDoSSpeedLimitConfigRelation;
const PackInfo = models.PackInfo;
const ModifyPacketFilterConfigRequest = models.ModifyPacketFilterConfigRequest;
const DescribeBlackWhiteIpListRequest = models.DescribeBlackWhiteIpListRequest;
const ModifyDomainUsrNameRequest = models.ModifyDomainUsrNameRequest;
const CreateDDoSSpeedLimitConfigResponse = models.CreateDDoSSpeedLimitConfigResponse;
const DeletePacketFilterConfigRequest = models.DeletePacketFilterConfigRequest;
const DescribeListDDoSGeoIPBlockConfigResponse = models.DescribeListDDoSGeoIPBlockConfigResponse;
const WaterPrintConfig = models.WaterPrintConfig;
const ProtocolBlockConfig = models.ProtocolBlockConfig;
const DescribeListListenerRequest = models.DescribeListListenerRequest;
const DeleteWaterPrintConfigResponse = models.DeleteWaterPrintConfigResponse;
const Layer4Rule = models.Layer4Rule;
const DeletePacketFilterConfigResponse = models.DeletePacketFilterConfigResponse;
const CreateProtocolBlockConfigResponse = models.CreateProtocolBlockConfigResponse;
const BGPIPInstanceSpecification = models.BGPIPInstanceSpecification;
const CreateIPAlarmThresholdConfigResponse = models.CreateIPAlarmThresholdConfigResponse;
const DeleteWaterPrintConfigRequest = models.DeleteWaterPrintConfigRequest;
const DescribeListBlackWhiteIpListResponse = models.DescribeListBlackWhiteIpListResponse;
const DDoSAIRelation = models.DDoSAIRelation;
const DescribeListDDoSSpeedLimitConfigResponse = models.DescribeListDDoSSpeedLimitConfigResponse;
const CreateDDoSGeoIPBlockConfigResponse = models.CreateDDoSGeoIPBlockConfigResponse;
const ListenerCcThreholdConfig = models.ListenerCcThreholdConfig;
const IPLineInfo = models.IPLineInfo;
const EipAddressRelation = models.EipAddressRelation;
const DescribeListListenerResponse = models.DescribeListListenerResponse;
const ProtectThresholdRelation = models.ProtectThresholdRelation;
const CreateL7RuleCertsResponse = models.CreateL7RuleCertsResponse;
const DDoSSpeedLimitConfig = models.DDoSSpeedLimitConfig;
const DescribeListProtectThresholdConfigResponse = models.DescribeListProtectThresholdConfigResponse;
const CertIdInsL7Rules = models.CertIdInsL7Rules;
const CreateDefaultAlarmThresholdResponse = models.CreateDefaultAlarmThresholdResponse;
const DescribeListIPAlarmConfigResponse = models.DescribeListIPAlarmConfigResponse;
const SuccessCode = models.SuccessCode;
const DescribeListBGPInstancesResponse = models.DescribeListBGPInstancesResponse;
const DescribeListDDoSAIRequest = models.DescribeListDDoSAIRequest;
const DescribeListIPAlarmConfigRequest = models.DescribeListIPAlarmConfigRequest;
const PortSegment = models.PortSegment;
const PacketFilterConfig = models.PacketFilterConfig;
const DefaultAlarmThreshold = models.DefaultAlarmThreshold;
const ForwardListener = models.ForwardListener;
const BGPInstanceSpecification = models.BGPInstanceSpecification;
const SwitchWaterPrintConfigResponse = models.SwitchWaterPrintConfigResponse;
const CreateWaterPrintKeyRequest = models.CreateWaterPrintKeyRequest;
const WaterPrintRelation = models.WaterPrintRelation;
const InsL7Rules = models.InsL7Rules;
const DescribeListDDoSAIResponse = models.DescribeListDDoSAIResponse;
const ModifyDDoSSpeedLimitConfigRequest = models.ModifyDDoSSpeedLimitConfigRequest;
const AssociateDDoSEipAddressRequest = models.AssociateDDoSEipAddressRequest;
const CreateBlackWhiteIpListRequest = models.CreateBlackWhiteIpListRequest;
const CreateBoundIPResponse = models.CreateBoundIPResponse;
const SpeedValue = models.SpeedValue;
const DeleteDDoSGeoIPBlockConfigRequest = models.DeleteDDoSGeoIPBlockConfigRequest;
const CreateSchedulingDomainResponse = models.CreateSchedulingDomainResponse;
const EipProductInfo = models.EipProductInfo;
const CreateDDoSAIResponse = models.CreateDDoSAIResponse;
const DDoSGeoIPBlockConfigRelation = models.DDoSGeoIPBlockConfigRelation;
const DescribeListProtocolBlockConfigRequest = models.DescribeListProtocolBlockConfigRequest;
const RegionInfo = models.RegionInfo;
const DescribeListWaterPrintConfigRequest = models.DescribeListWaterPrintConfigRequest;
const ModifyDDoSGeoIPBlockConfigResponse = models.ModifyDDoSGeoIPBlockConfigResponse;
const BGPInstance = models.BGPInstance;
const DescribeListWaterPrintConfigResponse = models.DescribeListWaterPrintConfigResponse;
const BGPInstanceUsages = models.BGPInstanceUsages;
const DeleteDDoSSpeedLimitConfigResponse = models.DeleteDDoSSpeedLimitConfigResponse;
const CreateWaterPrintKeyResponse = models.CreateWaterPrintKeyResponse;
const DeleteDDoSGeoIPBlockConfigResponse = models.DeleteDDoSGeoIPBlockConfigResponse;
const DescribeListBlackWhiteIpListRequest = models.DescribeListBlackWhiteIpListRequest;
const ModifyDDoSSpeedLimitConfigResponse = models.ModifyDDoSSpeedLimitConfigResponse;
const SchedulingDomainInfo = models.SchedulingDomainInfo;
const DescribeDefaultAlarmThresholdRequest = models.DescribeDefaultAlarmThresholdRequest;
const WaterPrintKey = models.WaterPrintKey;
const PacketFilterRelation = models.PacketFilterRelation;
const CreatePacketFilterConfigRequest = models.CreatePacketFilterConfigRequest;


/**
 * antiddos client
 * @class
 */
class AntiddosClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("antiddos.tencentcloudapi.com", "2020-03-09", credential, region, profile);
    }
    
    /**
     * This API is used to bind an EIP to an Anti-DDoS Advanced instance or a specified private IP of an ENI.
     * @param {AssociateDDoSEipAddressRequest} req
     * @param {function(string, AssociateDDoSEipAddressResponse):void} cb
     * @public
     */
    AssociateDDoSEipAddress(req, cb) {
        let resp = new AssociateDDoSEipAddressResponse();
        this.request("AssociateDDoSEipAddress", req, resp, cb);
    }

    /**
     * This API is used to modify intelligent scheduling domain names.
     * @param {ModifyDomainUsrNameRequest} req
     * @param {function(string, ModifyDomainUsrNameResponse):void} cb
     * @public
     */
    ModifyDomainUsrName(req, cb) {
        let resp = new ModifyDomainUsrNameResponse();
        this.request("ModifyDomainUsrName", req, resp, cb);
    }

    /**
     * This API is used to get a list of Anti-DDoS watermark configurations.
     * @param {DescribeListWaterPrintConfigRequest} req
     * @param {function(string, DescribeListWaterPrintConfigResponse):void} cb
     * @public
     */
    DescribeListWaterPrintConfig(req, cb) {
        let resp = new DescribeListWaterPrintConfigResponse();
        this.request("DescribeListWaterPrintConfig", req, resp, cb);
    }

    /**
     * This API is used to delete Anti-DDoS access rate limit configurations.
     * @param {DeleteDDoSSpeedLimitConfigRequest} req
     * @param {function(string, DeleteDDoSSpeedLimitConfigResponse):void} cb
     * @public
     */
    DeleteDDoSSpeedLimitConfig(req, cb) {
        let resp = new DeleteDDoSSpeedLimitConfigResponse();
        this.request("DeleteDDoSSpeedLimitConfig", req, resp, cb);
    }

    /**
     * This API is used to modify Anti-DDoS access rate limit configurations.
     * @param {ModifyDDoSSpeedLimitConfigRequest} req
     * @param {function(string, ModifyDDoSSpeedLimitConfigResponse):void} cb
     * @public
     */
    ModifyDDoSSpeedLimitConfig(req, cb) {
        let resp = new ModifyDDoSSpeedLimitConfigResponse();
        this.request("ModifyDDoSSpeedLimitConfig", req, resp, cb);
    }

    /**
     * This API is used to query layer-7 rules matched with certificate IDs.
     * @param {DescribeL7RulesBySSLCertIdRequest} req
     * @param {function(string, DescribeL7RulesBySSLCertIdResponse):void} cb
     * @public
     */
    DescribeL7RulesBySSLCertId(req, cb) {
        let resp = new DescribeL7RulesBySSLCertIdResponse();
        this.request("DescribeL7RulesBySSLCertId", req, resp, cb);
    }

    /**
     * This API is used to delete Anti-DDoS region blocking configurations.
     * @param {DeleteDDoSGeoIPBlockConfigRequest} req
     * @param {function(string, DeleteDDoSGeoIPBlockConfigResponse):void} cb
     * @public
     */
    DeleteDDoSGeoIPBlockConfig(req, cb) {
        let resp = new DeleteDDoSGeoIPBlockConfigResponse();
        this.request("DeleteDDoSGeoIPBlockConfig", req, resp, cb);
    }

    /**
     * This API is used to modify Anti-DDoS feature filtering rules.
     * @param {ModifyPacketFilterConfigRequest} req
     * @param {function(string, ModifyPacketFilterConfigResponse):void} cb
     * @public
     */
    ModifyPacketFilterConfig(req, cb) {
        let resp = new ModifyPacketFilterConfigResponse();
        this.request("ModifyPacketFilterConfig", req, resp, cb);
    }

    /**
     * This API is used to add Anti-DDoS feature filtering rules.
     * @param {CreatePacketFilterConfigRequest} req
     * @param {function(string, CreatePacketFilterConfigResponse):void} cb
     * @public
     */
    CreatePacketFilterConfig(req, cb) {
        let resp = new CreatePacketFilterConfigResponse();
        this.request("CreatePacketFilterConfig", req, resp, cb);
    }

    /**
     * This API is used to get a list of IP alarm threshold configurations.
     * @param {DescribeListIPAlarmConfigRequest} req
     * @param {function(string, DescribeListIPAlarmConfigResponse):void} cb
     * @public
     */
    DescribeListIPAlarmConfig(req, cb) {
        let resp = new DescribeListIPAlarmConfigResponse();
        this.request("DescribeListIPAlarmConfig", req, resp, cb);
    }

    /**
     * This API is used to get a list of Anti-DDoS Advanced instances.

     * @param {DescribeListBGPIPInstancesRequest} req
     * @param {function(string, DescribeListBGPIPInstancesResponse):void} cb
     * @public
     */
    DescribeListBGPIPInstances(req, cb) {
        let resp = new DescribeListBGPIPInstancesResponse();
        this.request("DescribeListBGPIPInstances", req, resp, cb);
    }

    /**
     * This API is used to get the default alarm threshold of an IP.
     * @param {DescribeDefaultAlarmThresholdRequest} req
     * @param {function(string, DescribeDefaultAlarmThresholdResponse):void} cb
     * @public
     */
    DescribeDefaultAlarmThreshold(req, cb) {
        let resp = new DescribeDefaultAlarmThresholdResponse();
        this.request("DescribeDefaultAlarmThreshold", req, resp, cb);
    }

    /**
     * This API is used to get a list of Anti-DDoS IP blocklists/allowlists.
     * @param {DescribeListBlackWhiteIpListRequest} req
     * @param {function(string, DescribeListBlackWhiteIpListResponse):void} cb
     * @public
     */
    DescribeListBlackWhiteIpList(req, cb) {
        let resp = new DescribeListBlackWhiteIpListResponse();
        this.request("DescribeListBlackWhiteIpList", req, resp, cb);
    }

    /**
     * This API is used to get a list of Anti-DDoS region blocking configurations.
     * @param {DescribeListDDoSGeoIPBlockConfigRequest} req
     * @param {function(string, DescribeListDDoSGeoIPBlockConfigResponse):void} cb
     * @public
     */
    DescribeListDDoSGeoIPBlockConfig(req, cb) {
        let resp = new DescribeListDDoSGeoIPBlockConfigResponse();
        this.request("DescribeListDDoSGeoIPBlockConfig", req, resp, cb);
    }

    /**
     * This API is used to unbind an Anti-DDoS EIP.
     * @param {DisassociateDDoSEipAddressRequest} req
     * @param {function(string, DisassociateDDoSEipAddressResponse):void} cb
     * @public
     */
    DisassociateDDoSEipAddress(req, cb) {
        let resp = new DisassociateDDoSEipAddressResponse();
        this.request("DisassociateDDoSEipAddress", req, resp, cb);
    }

    /**
     * This API is used to bind an IP to an Anti-DDoS Pro instance Both single IP instances and multi-IP instances are available. Note that you should wait until the current binding or unbinding completes before using this async API for new operations.
     * @param {CreateBoundIPRequest} req
     * @param {function(string, CreateBoundIPResponse):void} cb
     * @public
     */
    CreateBoundIP(req, cb) {
        let resp = new CreateBoundIPResponse();
        this.request("CreateBoundIP", req, resp, cb);
    }

    /**
     * This API is used to get a list of intelligent scheduling domain names.
     * @param {DescribeListSchedulingDomainRequest} req
     * @param {function(string, DescribeListSchedulingDomainResponse):void} cb
     * @public
     */
    DescribeListSchedulingDomain(req, cb) {
        let resp = new DescribeListSchedulingDomainResponse();
        this.request("DescribeListSchedulingDomain", req, resp, cb);
    }

    /**
     * This API is used to delete Anti-DDoS watermark keys.
     * @param {DeleteWaterPrintKeyRequest} req
     * @param {function(string, DeleteWaterPrintKeyResponse):void} cb
     * @public
     */
    DeleteWaterPrintKey(req, cb) {
        let resp = new DeleteWaterPrintKeyResponse();
        this.request("DeleteWaterPrintKey", req, resp, cb);
    }

    /**
     * This API is used to set the default alarm threshold of an IP.
     * @param {CreateDefaultAlarmThresholdRequest} req
     * @param {function(string, CreateDefaultAlarmThresholdResponse):void} cb
     * @public
     */
    CreateDefaultAlarmThreshold(req, cb) {
        let resp = new CreateDefaultAlarmThresholdResponse();
        this.request("CreateDefaultAlarmThreshold", req, resp, cb);
    }

    /**
     * This API is used to add Anti-DDoS watermark configurations.
     * @param {CreateWaterPrintConfigRequest} req
     * @param {function(string, CreateWaterPrintConfigResponse):void} cb
     * @public
     */
    CreateWaterPrintConfig(req, cb) {
        let resp = new CreateWaterPrintConfigResponse();
        this.request("CreateWaterPrintConfig", req, resp, cb);
    }

    /**
     * This API is used to get an Anti-DDoS IP blocklist/allowlist.
     * @param {DescribeBlackWhiteIpListRequest} req
     * @param {function(string, DescribeBlackWhiteIpListResponse):void} cb
     * @public
     */
    DescribeBlackWhiteIpList(req, cb) {
        let resp = new DescribeBlackWhiteIpListResponse();
        this.request("DescribeBlackWhiteIpList", req, resp, cb);
    }

    /**
     * This API is used to get a list of Anti-DDoS AI protection switches.
     * @param {DescribeListDDoSAIRequest} req
     * @param {function(string, DescribeListDDoSAIResponse):void} cb
     * @public
     */
    DescribeListDDoSAI(req, cb) {
        let resp = new DescribeListDDoSAIResponse();
        this.request("DescribeListDDoSAI", req, resp, cb);
    }

    /**
     * This API is used to set the default alarm threshold of an IP.
     * @param {CreateIPAlarmThresholdConfigRequest} req
     * @param {function(string, CreateIPAlarmThresholdConfigResponse):void} cb
     * @public
     */
    CreateIPAlarmThresholdConfig(req, cb) {
        let resp = new CreateIPAlarmThresholdConfigResponse();
        this.request("CreateIPAlarmThresholdConfig", req, resp, cb);
    }

    /**
     * This API is used to get a list of Anti-DDoS feature filtering rules.
     * @param {DescribeListPacketFilterConfigRequest} req
     * @param {function(string, DescribeListPacketFilterConfigResponse):void} cb
     * @public
     */
    DescribeListPacketFilterConfig(req, cb) {
        let resp = new DescribeListPacketFilterConfigResponse();
        this.request("DescribeListPacketFilterConfig", req, resp, cb);
    }

    /**
     * This API is used to get a list of Anti-DDoS access rate limit configurations.
     * @param {DescribeListDDoSSpeedLimitConfigRequest} req
     * @param {function(string, DescribeListDDoSSpeedLimitConfigResponse):void} cb
     * @public
     */
    DescribeListDDoSSpeedLimitConfig(req, cb) {
        let resp = new DescribeListDDoSSpeedLimitConfigResponse();
        this.request("DescribeListDDoSSpeedLimitConfig", req, resp, cb);
    }

    /**
     * This API is used to get a list of protection threshold configurations for AI protection switch, protection level, and CC threshold switch.
     * @param {DescribeListProtectThresholdConfigRequest} req
     * @param {function(string, DescribeListProtectThresholdConfigResponse):void} cb
     * @public
     */
    DescribeListProtectThresholdConfig(req, cb) {
        let resp = new DescribeListProtectThresholdConfigResponse();
        this.request("DescribeListProtectThresholdConfig", req, resp, cb);
    }

    /**
     * This API is used to add Anti-DDoS access rate limit configurations.
     * @param {CreateDDoSSpeedLimitConfigRequest} req
     * @param {function(string, CreateDDoSSpeedLimitConfigResponse):void} cb
     * @public
     */
    CreateDDoSSpeedLimitConfig(req, cb) {
        let resp = new CreateDDoSSpeedLimitConfigResponse();
        this.request("CreateDDoSSpeedLimitConfig", req, resp, cb);
    }

    /**
     * This API is used to get a list of Anti-DDoS Pro instances.

     * @param {DescribeListBGPInstancesRequest} req
     * @param {function(string, DescribeListBGPInstancesResponse):void} cb
     * @public
     */
    DescribeListBGPInstances(req, cb) {
        let resp = new DescribeListBGPInstancesResponse();
        this.request("DescribeListBGPInstances", req, resp, cb);
    }

    /**
     * This API is used to add an Anti-DDoS IP blocklist/allowlist.
     * @param {CreateBlackWhiteIpListRequest} req
     * @param {function(string, CreateBlackWhiteIpListResponse):void} cb
     * @public
     */
    CreateBlackWhiteIpList(req, cb) {
        let resp = new CreateBlackWhiteIpListResponse();
        this.request("CreateBlackWhiteIpList", req, resp, cb);
    }

    /**
     * This API is used to delete an Anti-DDoS IP blocklist/allowlist.
     * @param {DeleteBlackWhiteIpListRequest} req
     * @param {function(string, DeleteBlackWhiteIpListResponse):void} cb
     * @public
     */
    DeleteBlackWhiteIpList(req, cb) {
        let resp = new DeleteBlackWhiteIpListResponse();
        this.request("DeleteBlackWhiteIpList", req, resp, cb);
    }

    /**
     * This API is used to add an Anti-DDoS region blocking configuration.
     * @param {CreateDDoSGeoIPBlockConfigRequest} req
     * @param {function(string, CreateDDoSGeoIPBlockConfigResponse):void} cb
     * @public
     */
    CreateDDoSGeoIPBlockConfig(req, cb) {
        let resp = new CreateDDoSGeoIPBlockConfigResponse();
        this.request("CreateDDoSGeoIPBlockConfig", req, resp, cb);
    }

    /**
     * This API is used to delete Anti-DDoS watermark configurations.
     * @param {DeleteWaterPrintConfigRequest} req
     * @param {function(string, DeleteWaterPrintConfigResponse):void} cb
     * @public
     */
    DeleteWaterPrintConfig(req, cb) {
        let resp = new DeleteWaterPrintConfigResponse();
        this.request("DeleteWaterPrintConfig", req, resp, cb);
    }

    /**
     * This API is used to set Anti-DDoS AI protection switches.
     * @param {CreateDDoSAIRequest} req
     * @param {function(string, CreateDDoSAIResponse):void} cb
     * @public
     */
    CreateDDoSAI(req, cb) {
        let resp = new CreateDDoSAIResponse();
        this.request("CreateDDoSAI", req, resp, cb);
    }

    /**
     * This API is used to delete Anti-DDoS feature filtering rules.
     * @param {DeletePacketFilterConfigRequest} req
     * @param {function(string, DeletePacketFilterConfigResponse):void} cb
     * @public
     */
    DeletePacketFilterConfig(req, cb) {
        let resp = new DeletePacketFilterConfigResponse();
        this.request("DeletePacketFilterConfig", req, resp, cb);
    }

    /**
     * This API is used to enable or disable Anti-DDoS watermark configurations.
     * @param {SwitchWaterPrintConfigRequest} req
     * @param {function(string, SwitchWaterPrintConfigResponse):void} cb
     * @public
     */
    SwitchWaterPrintConfig(req, cb) {
        let resp = new SwitchWaterPrintConfigResponse();
        this.request("SwitchWaterPrintConfig", req, resp, cb);
    }

    /**
     * This API is used to get a list of Anti-DDoS protocol blocking configurations.
     * @param {DescribeListProtocolBlockConfigRequest} req
     * @param {function(string, DescribeListProtocolBlockConfigResponse):void} cb
     * @public
     */
    DescribeListProtocolBlockConfig(req, cb) {
        let resp = new DescribeListProtocolBlockConfigResponse();
        this.request("DescribeListProtocolBlockConfig", req, resp, cb);
    }

    /**
     * This API is used to create a domain name for IP scheduling and switching.
     * @param {CreateSchedulingDomainRequest} req
     * @param {function(string, CreateSchedulingDomainResponse):void} cb
     * @public
     */
    CreateSchedulingDomain(req, cb) {
        let resp = new CreateSchedulingDomainResponse();
        this.request("CreateSchedulingDomain", req, resp, cb);
    }

    /**
     * This API is used to add Anti-DDoS watermark keys.
     * @param {CreateWaterPrintKeyRequest} req
     * @param {function(string, CreateWaterPrintKeyResponse):void} cb
     * @public
     */
    CreateWaterPrintKey(req, cb) {
        let resp = new CreateWaterPrintKeyResponse();
        this.request("CreateWaterPrintKey", req, resp, cb);
    }

    /**
     * This API is used to set Anti-DDoS protocol blocking configurations.
     * @param {CreateProtocolBlockConfigRequest} req
     * @param {function(string, CreateProtocolBlockConfigResponse):void} cb
     * @public
     */
    CreateProtocolBlockConfig(req, cb) {
        let resp = new CreateProtocolBlockConfigResponse();
        this.request("CreateProtocolBlockConfig", req, resp, cb);
    }

    /**
     * This API is used to configure certificates with layer-7 forwarding rules in a batch for SSL testing.
     * @param {CreateL7RuleCertsRequest} req
     * @param {function(string, CreateL7RuleCertsResponse):void} cb
     * @public
     */
    CreateL7RuleCerts(req, cb) {
        let resp = new CreateL7RuleCertsResponse();
        this.request("CreateL7RuleCerts", req, resp, cb);
    }

    /**
     * This API is used to modify Anti-DDoS region blocking configurations.
     * @param {ModifyDDoSGeoIPBlockConfigRequest} req
     * @param {function(string, ModifyDDoSGeoIPBlockConfigResponse):void} cb
     * @public
     */
    ModifyDDoSGeoIPBlockConfig(req, cb) {
        let resp = new ModifyDDoSGeoIPBlockConfigResponse();
        this.request("ModifyDDoSGeoIPBlockConfig", req, resp, cb);
    }

    /**
     * This API is used to get a list of forwarding listeners.
     * @param {DescribeListListenerRequest} req
     * @param {function(string, DescribeListListenerResponse):void} cb
     * @public
     */
    DescribeListListener(req, cb) {
        let resp = new DescribeListListenerResponse();
        this.request("DescribeListListener", req, resp, cb);
    }


}
module.exports = AntiddosClient;
