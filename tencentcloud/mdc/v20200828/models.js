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
 * RTMP configuration information of the queried output.
 * @class
 */
class DescribeOutputRTMPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Idle timeout period.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IdleTimeout = null;

        /**
         * Chunk size.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ChunkSize = null;

        /**
         * Destination address information list of RTMP push.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RTMPAddressDestination> || null}
         */
        this.Destinations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;
        this.ChunkSize = 'ChunkSize' in params ? params.ChunkSize : null;

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new RTMPAddressDestination();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }

    }
}

/**
 * DescribeStreamLinkFlowLogs response structure.
 * @class
 */
class DescribeStreamLinkFlowLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * A list of the logs.
         * @type {Array.<FlowLogInfo> || null}
         */
        this.Infos = null;

        /**
         * The current page number.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * The number of records per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * The total number of records.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * The total number of pages.
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new FlowLogInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Output destination address.
 * @class
 */
class OutputAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * Output destination IP.
         * @type {string || null}
         */
        this.Ip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;

    }
}

/**
 * The listen address for an SRT output.
 * @class
 */
class OutputSRTSourceAddressResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * The listen IP.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * The listen port.
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * Input address information.
 * @class
 */
class InputAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input address IP.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Input address port.
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * RTP configuration information of the queried input.
 * @class
 */
class DescribeInputRTPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is FEC.
         * @type {string || null}
         */
        this.FEC = null;

        /**
         * Idle timeout period.
         * @type {number || null}
         */
        this.IdleTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FEC = 'FEC' in params ? params.FEC : null;
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;

    }
}

/**
 * The real-time RTP streaming information of a flow.
 * @class
 */
class FlowRealtimeStatusRTP extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of packets transmitted.
         * @type {number || null}
         */
        this.Packets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Packets = 'Packets' in params ? params.Packets : null;

    }
}

/**
 * DescribeStreamLinkRegions request structure.
 * @class
 */
class DescribeStreamLinkRegionsRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * ModifyStreamLinkFlow request structure.
 * @class
 */
class ModifyStreamLinkFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * Name of the flow to modify
         * @type {string || null}
         */
        this.FlowName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.FlowName = 'FlowName' in params ? params.FlowName : null;

    }
}

/**
 * DeleteStreamLinkFlow request structure.
 * @class
 */
class DeleteStreamLinkFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * DescribeStreamLinkFlowMediaStatistics response structure.
 * @class
 */
class DescribeStreamLinkFlowMediaStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * A list of the media data.
         * @type {Array.<FlowMediaInfo> || null}
         */
        this.Infos = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new FlowMediaInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyStreamLinkInput response structure.
 * @class
 */
class ModifyStreamLinkInputResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The input information after modification.
         * @type {DescribeInput || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new DescribeInput();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The RTP configuration of the output to create.
 * @class
 */
class CreateOutputInfoRTPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * The relay destination addresses. One or two addresses are allowed.
         * @type {Array.<CreateOutputRTPSettingsDestinations> || null}
         */
        this.Destinations = null;

        /**
         * This parameter must be set to `none`.
         * @type {string || null}
         */
        this.FEC = null;

        /**
         * The timeout period (ms).
         * @type {number || null}
         */
        this.IdleTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new CreateOutputRTPSettingsDestinations();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }
        this.FEC = 'FEC' in params ? params.FEC : null;
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;

    }
}

/**
 * CreateStreamLinkFlow request structure.
 * @class
 */
class CreateStreamLinkFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow name
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * Maximum bandwidth in bps. Valid values: `10000000`, `20000000`, `50000000`
         * @type {number || null}
         */
        this.MaxBandwidth = null;

        /**
         * Flow input group
         * @type {Array.<CreateInput> || null}
         */
        this.InputGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowName = 'FlowName' in params ? params.FlowName : null;
        this.MaxBandwidth = 'MaxBandwidth' in params ? params.MaxBandwidth : null;

        if (params.InputGroup) {
            this.InputGroup = new Array();
            for (let z in params.InputGroup) {
                let obj = new CreateInput();
                obj.deserialize(params.InputGroup[z]);
                this.InputGroup.push(obj);
            }
        }

    }
}

/**
 * StartStreamLinkFlow request structure.
 * @class
 */
class StartStreamLinkFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * The SRT destination address of the output to create.
 * @class
 */
class CreateOutputSrtSettingsDestinations extends  AbstractModel {
    constructor(){
        super();

        /**
         * The output IP.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * The output port.
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * Push destination address information.
 * @class
 */
class SRTAddressDestination extends  AbstractModel {
    constructor(){
        super();

        /**
         * Destination address IP.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Destination address port.
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * DescribeStreamLinkFlowStatistics request structure.
 * @class
 */
class DescribeStreamLinkFlowStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * Whether to query the inputs or outputs. Valid values: input, output.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The input or output ID.
         * @type {string || null}
         */
        this.InputOutputId = null;

        /**
         * Whether to query the primary or backup pipeline. Valid values: 0, 1.
         * @type {string || null}
         */
        this.Pipeline = null;

        /**
         * The query interval. Valid values: 5s, 1min, 5min, 15min.
         * @type {string || null}
         */
        this.Period = null;

        /**
         * The start time for query, which is 1 hour ago by default. You can query statistics in the last 7 days.
It must be in UTC format, such as `2020-01-01T12:00:00Z`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time for query, which is 1 hour after the start time by default. The longest time range allowed for query is 24 hours.
It must be in UTC format, such as `2020-01-01T12:00:00Z`.
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.InputOutputId = 'InputOutputId' in params ? params.InputOutputId : null;
        this.Pipeline = 'Pipeline' in params ? params.Pipeline : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * The SRT input address.
 * @class
 */
class SRTSourceAddressReq extends  AbstractModel {
    constructor(){
        super();

        /**
         * The peer IP.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * The peer port.
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * Configuration information of the queried output.
 * @class
 */
class DescribeOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Output ID.
         * @type {string || null}
         */
        this.OutputId = null;

        /**
         * Output name.
         * @type {string || null}
         */
        this.OutputName = null;

        /**
         * Output type.
         * @type {string || null}
         */
        this.OutputType = null;

        /**
         * Output description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Output protocol.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Output destination address information list.
         * @type {Array.<OutputAddress> || null}
         */
        this.OutputAddressList = null;

        /**
         * Output region.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OutputRegion = null;

        /**
         * SRT configuration information of output.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {DescribeOutputSRTSettings || null}
         */
        this.SRTSettings = null;

        /**
         * RTP configuration information of output.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {DescribeOutputRTPSettings || null}
         */
        this.RTPSettings = null;

        /**
         * RTMP configuration information of output.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {DescribeOutputRTMPSettings || null}
         */
        this.RTMPSettings = null;

        /**
         * RTMP pull configuration of the output
Note: This field may return `null`, indicating that no valid value was found.
         * @type {DescribeOutputRTMPPullSettings || null}
         */
        this.RTMPPullSettings = null;

        /**
         * CIDR allowlist
This parameter is valid if `Protocol` is set to `RTMP_PULL`. If this parameter is left empty, there is no restriction on clients’ IP addresses.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.AllowIpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutputId = 'OutputId' in params ? params.OutputId : null;
        this.OutputName = 'OutputName' in params ? params.OutputName : null;
        this.OutputType = 'OutputType' in params ? params.OutputType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.OutputAddressList) {
            this.OutputAddressList = new Array();
            for (let z in params.OutputAddressList) {
                let obj = new OutputAddress();
                obj.deserialize(params.OutputAddressList[z]);
                this.OutputAddressList.push(obj);
            }
        }
        this.OutputRegion = 'OutputRegion' in params ? params.OutputRegion : null;

        if (params.SRTSettings) {
            let obj = new DescribeOutputSRTSettings();
            obj.deserialize(params.SRTSettings)
            this.SRTSettings = obj;
        }

        if (params.RTPSettings) {
            let obj = new DescribeOutputRTPSettings();
            obj.deserialize(params.RTPSettings)
            this.RTPSettings = obj;
        }

        if (params.RTMPSettings) {
            let obj = new DescribeOutputRTMPSettings();
            obj.deserialize(params.RTMPSettings)
            this.RTMPSettings = obj;
        }

        if (params.RTMPPullSettings) {
            let obj = new DescribeOutputRTMPPullSettings();
            obj.deserialize(params.RTMPPullSettings)
            this.RTMPPullSettings = obj;
        }
        this.AllowIpList = 'AllowIpList' in params ? params.AllowIpList : null;

    }
}

/**
 * Configuration information of the queried flow.
 * @class
 */
class DescribeFlow extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * Flow name.
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * Flow status. Valid values: `IDLE`, `RUNNING`
         * @type {string || null}
         */
        this.State = null;

        /**
         * Maximum bandwidth value.
         * @type {number || null}
         */
        this.MaxBandwidth = null;

        /**
         * Input group.
         * @type {Array.<DescribeInput> || null}
         */
        this.InputGroup = null;

        /**
         * Output group.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DescribeOutput> || null}
         */
        this.OutputGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.FlowName = 'FlowName' in params ? params.FlowName : null;
        this.State = 'State' in params ? params.State : null;
        this.MaxBandwidth = 'MaxBandwidth' in params ? params.MaxBandwidth : null;

        if (params.InputGroup) {
            this.InputGroup = new Array();
            for (let z in params.InputGroup) {
                let obj = new DescribeInput();
                obj.deserialize(params.InputGroup[z]);
                this.InputGroup.push(obj);
            }
        }

        if (params.OutputGroup) {
            this.OutputGroup = new Array();
            for (let z in params.OutputGroup) {
                let obj = new DescribeOutput();
                obj.deserialize(params.OutputGroup[z]);
                this.OutputGroup.push(obj);
            }
        }

    }
}

/**
 * DeleteStreamLinkOutput request structure.
 * @class
 */
class DeleteStreamLinkOutputRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * Output ID
         * @type {string || null}
         */
        this.OutputId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.OutputId = 'OutputId' in params ? params.OutputId : null;

    }
}

/**
 * A list of the flow statistics.
 * @class
 */
class FlowStatisticsArray extends  AbstractModel {
    constructor(){
        super();

        /**
         * The timestamp.
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * The statistics of all the sessions.
         * @type {Array.<FlowStatistics> || null}
         */
        this.FlowStatistics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

        if (params.FlowStatistics) {
            this.FlowStatistics = new Array();
            for (let z in params.FlowStatistics) {
                let obj = new FlowStatistics();
                obj.deserialize(params.FlowStatistics[z]);
                this.FlowStatistics.push(obj);
            }
        }

    }
}

/**
 * SRT configuration information of the created input.
 * @class
 */
class CreateInputSRTSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SRT mode. Valid values: LISTENER (default), CALLER.
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * Stream ID, which can contain 0 to 512 letters, digits, and special characters (.#!:&,=_-).
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * Latency in ms. Default value: 0. Value range: [0, 3000].
         * @type {number || null}
         */
        this.Latency = null;

        /**
         * Receive latency in ms. Default value: 120. Value range: [0, 3000].
         * @type {number || null}
         */
        this.RecvLatency = null;

        /**
         * Peer latency in ms. Default value: 0. Value range: [0, 3000].
         * @type {number || null}
         */
        this.PeerLatency = null;

        /**
         * Peer timeout period in ms. Default value: 5000. Value range: [1000, 10000].
         * @type {number || null}
         */
        this.PeerIdleTimeout = null;

        /**
         * Decryption key, which is empty by default, indicating not to encrypt. Only ASCII codes can be filled. Length: [10, 79].
         * @type {string || null}
         */
        this.Passphrase = null;

        /**
         * Key length. Default value: 0. Valid values: 0, 16, 24, 32.
         * @type {number || null}
         */
        this.PbKeyLen = null;

        /**
         * The SRT peer address, which is required if `Mode` is `CALLER`. Only one address is allowed.
         * @type {Array.<SRTSourceAddressReq> || null}
         */
        this.SourceAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.Latency = 'Latency' in params ? params.Latency : null;
        this.RecvLatency = 'RecvLatency' in params ? params.RecvLatency : null;
        this.PeerLatency = 'PeerLatency' in params ? params.PeerLatency : null;
        this.PeerIdleTimeout = 'PeerIdleTimeout' in params ? params.PeerIdleTimeout : null;
        this.Passphrase = 'Passphrase' in params ? params.Passphrase : null;
        this.PbKeyLen = 'PbKeyLen' in params ? params.PbKeyLen : null;

        if (params.SourceAddresses) {
            this.SourceAddresses = new Array();
            for (let z in params.SourceAddresses) {
                let obj = new SRTSourceAddressReq();
                obj.deserialize(params.SourceAddresses[z]);
                this.SourceAddresses.push(obj);
            }
        }

    }
}

/**
 * The audio data of a flow.
 * @class
 */
class FlowMediaAudio extends  AbstractModel {
    constructor(){
        super();

        /**
         * The frame rate.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * The bitrate (bps).
         * @type {number || null}
         */
        this.Rate = null;

        /**
         * The audio PID.
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * The ID of a push session.
         * @type {string || null}
         */
        this.SessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * RTMP configuration information of the queried input
 * @class
 */
class DescribeInputRTMPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Path for RTMP stream pushing
Note: this field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * StreamKey for RTMP stream pushing
Format of an RTMP stream pushing URL: rtmp://IP address:1935/AppName/StreamKey
         * @type {string || null}
         */
        this.StreamKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamKey = 'StreamKey' in params ? params.StreamKey : null;

    }
}

/**
 * ModifyStreamLinkFlow response structure.
 * @class
 */
class ModifyStreamLinkFlowResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamLinkFlow request structure.
 * @class
 */
class DescribeStreamLinkFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * Region information
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region name
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeStreamLinkFlowMediaStatistics request structure.
 * @class
 */
class DescribeStreamLinkFlowMediaStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * Whether to query the inputs or outputs. Valid values: input, output.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The input or output ID.
         * @type {string || null}
         */
        this.InputOutputId = null;

        /**
         * Whether to query the primary or backup pipeline. Valid values: 0, 1.
         * @type {string || null}
         */
        this.Pipeline = null;

        /**
         * The query interval. Valid values: 5s, 1min, 5min, 15min.
         * @type {string || null}
         */
        this.Period = null;

        /**
         * The start time for query, which is 1 hour ago by default. You can query statistics in the last 7 days.
It must be in UTC format, such as `2020-01-01T12:00:00Z`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time for query, which is 1 hour after the start time by default. The longest time range allowed for query is 24 hours.
It must be in UTC format, such as `2020-01-01T12:00:00Z`.
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.InputOutputId = 'InputOutputId' in params ? params.InputOutputId : null;
        this.Pipeline = 'Pipeline' in params ? params.Pipeline : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeStreamLinkFlowRealtimeStatus request structure.
 * @class
 */
class DescribeStreamLinkFlowRealtimeStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * The IDs of the inputs to query. If this parameter and `OutputIds` are both empty, all inputs and outputs are queried.
         * @type {Array.<string> || null}
         */
        this.InputIds = null;

        /**
         * The IDs of the outputs to query. If this parameter and `OutputIds` are both empty, all inputs and outputs are queried.
         * @type {Array.<string> || null}
         */
        this.OutputIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.InputIds = 'InputIds' in params ? params.InputIds : null;
        this.OutputIds = 'OutputIds' in params ? params.OutputIds : null;

    }
}

/**
 * ModifyStreamLinkOutputInfo response structure.
 * @class
 */
class ModifyStreamLinkOutputInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The output configuration after modification.
         * @type {DescribeOutput || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new DescribeOutput();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamLinkFlow response structure.
 * @class
 */
class DescribeStreamLinkFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration information of a flow
         * @type {DescribeFlow || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new DescribeFlow();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopStreamLinkFlow response structure.
 * @class
 */
class StopStreamLinkFlowResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The SRT streaming performance data.
 * @class
 */
class FlowSRTInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The timestamp (seconds).
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * The packet loss rate for sending.
         * @type {number || null}
         */
        this.SendPacketLossRate = null;

        /**
         * The retry rate for sending.
         * @type {number || null}
         */
        this.SendRetransmissionRate = null;

        /**
         * The packet loss rate for receiving.
         * @type {number || null}
         */
        this.RecvPacketLossRate = null;

        /**
         * The retry rate for receiving.
         * @type {number || null}
         */
        this.RecvRetransmissionRate = null;

        /**
         * The peer RTT.
         * @type {number || null}
         */
        this.RTT = null;

        /**
         * The ID of a push session.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * The number of dropped packets for sending.
         * @type {number || null}
         */
        this.SendPacketDropNumber = null;

        /**
         * The number of dropped packets for receiving.
         * @type {number || null}
         */
        this.RecvPacketDropNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.SendPacketLossRate = 'SendPacketLossRate' in params ? params.SendPacketLossRate : null;
        this.SendRetransmissionRate = 'SendRetransmissionRate' in params ? params.SendRetransmissionRate : null;
        this.RecvPacketLossRate = 'RecvPacketLossRate' in params ? params.RecvPacketLossRate : null;
        this.RecvRetransmissionRate = 'RecvRetransmissionRate' in params ? params.RecvRetransmissionRate : null;
        this.RTT = 'RTT' in params ? params.RTT : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SendPacketDropNumber = 'SendPacketDropNumber' in params ? params.SendPacketDropNumber : null;
        this.RecvPacketDropNumber = 'RecvPacketDropNumber' in params ? params.RecvPacketDropNumber : null;

    }
}

/**
 * The flow statistics.
 * @class
 */
class FlowStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * The session ID.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * The peer IP.
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * The total bandwidth.
         * @type {number || null}
         */
        this.Network = null;

        /**
         * The video data.
         * @type {Array.<FlowVideo> || null}
         */
        this.Video = null;

        /**
         * The audio data.
         * @type {Array.<FlowAudio> || null}
         */
        this.Audio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.Network = 'Network' in params ? params.Network : null;

        if (params.Video) {
            this.Video = new Array();
            for (let z in params.Video) {
                let obj = new FlowVideo();
                obj.deserialize(params.Video[z]);
                this.Video.push(obj);
            }
        }

        if (params.Audio) {
            this.Audio = new Array();
            for (let z in params.Audio) {
                let obj = new FlowAudio();
                obj.deserialize(params.Audio[z]);
                this.Audio.push(obj);
            }
        }

    }
}

/**
 * DescribeStreamLinkFlowSRTStatistics request structure.
 * @class
 */
class DescribeStreamLinkFlowSRTStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * Whether to query the inputs or outputs. Valid values: input, output.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The input or output ID.
         * @type {string || null}
         */
        this.InputOutputId = null;

        /**
         * Whether to query the primary or backup pipeline. Valid values: 0, 1.
         * @type {string || null}
         */
        this.Pipeline = null;

        /**
         * The start time for query, which is 1 hour ago by default. You can query statistics in the last 7 days.
It must be in UTC format, such as `2020-01-01T12:00:00Z`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time for query, which is 1 hour after the start time by default. The longest time range allowed for query is 24 hours.
It must be in UTC format, such as `2020-01-01T12:00:00Z`.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The query interval. Valid values: 5s, 1min, 5min, 15min.
         * @type {string || null}
         */
        this.Period = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.InputOutputId = 'InputOutputId' in params ? params.InputOutputId : null;
        this.Pipeline = 'Pipeline' in params ? params.Pipeline : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * DescribeStreamLinkFlowRealtimeStatus response structure.
 * @class
 */
class DescribeStreamLinkFlowRealtimeStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The timestamp (seconds) of the query.
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * A list of the real-time data.
         * @type {Array.<FlowRealtimeStatusItem> || null}
         */
        this.Datas = null;

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
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

        if (params.Datas) {
            this.Datas = new Array();
            for (let z in params.Datas) {
                let obj = new FlowRealtimeStatusItem();
                obj.deserialize(params.Datas[z]);
                this.Datas.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The audio data of the flow.
 * @class
 */
class FlowAudio extends  AbstractModel {
    constructor(){
        super();

        /**
         * The frame rate.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * The bitrate (bps).
         * @type {number || null}
         */
        this.Rate = null;

        /**
         * The audio PID.
         * @type {number || null}
         */
        this.Pid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.Pid = 'Pid' in params ? params.Pid : null;

    }
}

/**
 * The RTP destination address of the output to create.
 * @class
 */
class CreateOutputRTPSettingsDestinations extends  AbstractModel {
    constructor(){
        super();

        /**
         * The relay destination IP.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * The relay destination port.
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * The video data of a flow.
 * @class
 */
class FlowVideo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The frame rate.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * The bitrate (bps).
         * @type {number || null}
         */
        this.Rate = null;

        /**
         * The audio PID.
         * @type {number || null}
         */
        this.Pid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.Pid = 'Pid' in params ? params.Pid : null;

    }
}

/**
 * StopStreamLinkFlow request structure.
 * @class
 */
class StopStreamLinkFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * Configuration information of the created input.
 * @class
 */
class CreateInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input name, which can contain 1 to 32 letters, digits, and underscores.
         * @type {string || null}
         */
        this.InputName = null;

        /**
         * Input protocol. Valid values: `SRT`, `RTP`, `RTMP`
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Input description. Length: [0, 255].
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Allowlist of input IPs in CIDR format.
         * @type {Array.<string> || null}
         */
        this.AllowIpList = null;

        /**
         * SRT configuration information of input.
         * @type {CreateInputSRTSettings || null}
         */
        this.SRTSettings = null;

        /**
         * RTP configuration information of input.
         * @type {CreateInputRTPSettings || null}
         */
        this.RTPSettings = null;

        /**
         * Input failover. Valid values: `OPEN`, `CLOSE` (default)
         * @type {string || null}
         */
        this.FailOver = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputName = 'InputName' in params ? params.InputName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AllowIpList = 'AllowIpList' in params ? params.AllowIpList : null;

        if (params.SRTSettings) {
            let obj = new CreateInputSRTSettings();
            obj.deserialize(params.SRTSettings)
            this.SRTSettings = obj;
        }

        if (params.RTPSettings) {
            let obj = new CreateInputRTPSettings();
            obj.deserialize(params.RTPSettings)
            this.RTPSettings = obj;
        }
        this.FailOver = 'FailOver' in params ? params.FailOver : null;

    }
}

/**
 * The RTMP configuration of the output to create.
 * @class
 */
class CreateOutputRTMPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * The relay destination addresses. One or two addresses are allowed.
         * @type {Array.<CreateOutputRtmpSettingsDestinations> || null}
         */
        this.Destinations = null;

        /**
         * The RTMP chunk size. Value range: [4096, 40960].
         * @type {number || null}
         */
        this.ChunkSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new CreateOutputRtmpSettingsDestinations();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }
        this.ChunkSize = 'ChunkSize' in params ? params.ChunkSize : null;

    }
}

/**
 * RTMP pull URL of the output
 * @class
 */
class DescribeOutputRTMPPullServerUrl extends  AbstractModel {
    constructor(){
        super();

        /**
         * `tcUrl` of the RTMP pull URL
         * @type {string || null}
         */
        this.TcUrl = null;

        /**
         * Stream key of the RTMP pull URL
         * @type {string || null}
         */
        this.StreamKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TcUrl = 'TcUrl' in params ? params.TcUrl : null;
        this.StreamKey = 'StreamKey' in params ? params.StreamKey : null;

    }
}

/**
 * Configuration information of the queried input.
 * @class
 */
class DescribeInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input ID.
         * @type {string || null}
         */
        this.InputId = null;

        /**
         * Input name.
         * @type {string || null}
         */
        this.InputName = null;

        /**
         * Input description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Input protocol.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Input address list.
         * @type {Array.<InputAddress> || null}
         */
        this.InputAddressList = null;

        /**
         * Input IP allowlist.
         * @type {Array.<string> || null}
         */
        this.AllowIpList = null;

        /**
         * SRT configuration information of input.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {DescribeInputSRTSettings || null}
         */
        this.SRTSettings = null;

        /**
         * RTP configuration information of input.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {DescribeInputRTPSettings || null}
         */
        this.RTPSettings = null;

        /**
         * Input region.
         * @type {string || null}
         */
        this.InputRegion = null;

        /**
         * RTMP configuration information of an input
         * @type {DescribeInputRTMPSettings || null}
         */
        this.RTMPSettings = null;

        /**
         * Input failover
Note: this field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.FailOver = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputId = 'InputId' in params ? params.InputId : null;
        this.InputName = 'InputName' in params ? params.InputName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.InputAddressList) {
            this.InputAddressList = new Array();
            for (let z in params.InputAddressList) {
                let obj = new InputAddress();
                obj.deserialize(params.InputAddressList[z]);
                this.InputAddressList.push(obj);
            }
        }
        this.AllowIpList = 'AllowIpList' in params ? params.AllowIpList : null;

        if (params.SRTSettings) {
            let obj = new DescribeInputSRTSettings();
            obj.deserialize(params.SRTSettings)
            this.SRTSettings = obj;
        }

        if (params.RTPSettings) {
            let obj = new DescribeInputRTPSettings();
            obj.deserialize(params.RTPSettings)
            this.RTPSettings = obj;
        }
        this.InputRegion = 'InputRegion' in params ? params.InputRegion : null;

        if (params.RTMPSettings) {
            let obj = new DescribeInputRTMPSettings();
            obj.deserialize(params.RTMPSettings)
            this.RTMPSettings = obj;
        }
        this.FailOver = 'FailOver' in params ? params.FailOver : null;

    }
}

/**
 * The RTMP destination address of the output to create.
 * @class
 */
class CreateOutputRtmpSettingsDestinations extends  AbstractModel {
    constructor(){
        super();

        /**
         * The relay URL. Format: `rtmp://domain/live`.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * The `StreamKey` for relay. Format: `stream?key=value`.
         * @type {string || null}
         */
        this.StreamKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.StreamKey = 'StreamKey' in params ? params.StreamKey : null;

    }
}

/**
 * The information of the output to create.
 * @class
 */
class CreateOutputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The output name.
         * @type {string || null}
         */
        this.OutputName = null;

        /**
         * Description of the output.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The output protocol. Valid values: SRT, RTP, RTMP, RTMP_PULL.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * The output region.
         * @type {string || null}
         */
        this.OutputRegion = null;

        /**
         * The SRT configuration.
         * @type {CreateOutputSrtSettings || null}
         */
        this.SRTSettings = null;

        /**
         * The RTMP configuration.
         * @type {CreateOutputRTMPSettings || null}
         */
        this.RTMPSettings = null;

        /**
         * The RTP configuration.
         * @type {CreateOutputInfoRTPSettings || null}
         */
        this.RTPSettings = null;

        /**
         * The IP allowlist. The address must be in CIDR format, such as `0.0.0.0/0`.
This parameter is valid if `Protocol` is set to `RTMP_PULL`. If it is left empty, there is no restriction on clients’ IP addresses.
         * @type {Array.<string> || null}
         */
        this.AllowIpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutputName = 'OutputName' in params ? params.OutputName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.OutputRegion = 'OutputRegion' in params ? params.OutputRegion : null;

        if (params.SRTSettings) {
            let obj = new CreateOutputSrtSettings();
            obj.deserialize(params.SRTSettings)
            this.SRTSettings = obj;
        }

        if (params.RTMPSettings) {
            let obj = new CreateOutputRTMPSettings();
            obj.deserialize(params.RTMPSettings)
            this.RTMPSettings = obj;
        }

        if (params.RTPSettings) {
            let obj = new CreateOutputInfoRTPSettings();
            obj.deserialize(params.RTPSettings)
            this.RTPSettings = obj;
        }
        this.AllowIpList = 'AllowIpList' in params ? params.AllowIpList : null;

    }
}

/**
 * The logs of a flow.
 * @class
 */
class FlowLogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The timestamp (seconds).
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * Whether it is an input or output.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The input or output ID.
         * @type {string || null}
         */
        this.InputOutputId = null;

        /**
         * The protocol.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * The event code.
         * @type {string || null}
         */
        this.EventCode = null;

        /**
         * The event information.
         * @type {string || null}
         */
        this.EventMessage = null;

        /**
         * The peer IP.
         * @type {string || null}
         */
        this.RemoteIp = null;

        /**
         * The peer port.
         * @type {string || null}
         */
        this.RemotePort = null;

        /**
         * Whether it is a primary or backup pipeline. Valid values: 0 (primary), 1 (backup).
         * @type {string || null}
         */
        this.Pipeline = null;

        /**
         * The input or output name.
         * @type {string || null}
         */
        this.InputOutputName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.InputOutputId = 'InputOutputId' in params ? params.InputOutputId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.EventCode = 'EventCode' in params ? params.EventCode : null;
        this.EventMessage = 'EventMessage' in params ? params.EventMessage : null;
        this.RemoteIp = 'RemoteIp' in params ? params.RemoteIp : null;
        this.RemotePort = 'RemotePort' in params ? params.RemotePort : null;
        this.Pipeline = 'Pipeline' in params ? params.Pipeline : null;
        this.InputOutputName = 'InputOutputName' in params ? params.InputOutputName : null;

    }
}

/**
 * The media data of a flow.
 * @class
 */
class FlowMediaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The timestamp (seconds).
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * The total bandwidth.
         * @type {number || null}
         */
        this.Network = null;

        /**
         * The video data of the flow.
         * @type {Array.<FlowMediaVideo> || null}
         */
        this.Video = null;

        /**
         * The audio data of the flow.
         * @type {Array.<FlowMediaAudio> || null}
         */
        this.Audio = null;

        /**
         * The ID of a push session.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * The client IP.
         * @type {string || null}
         */
        this.ClientIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Network = 'Network' in params ? params.Network : null;

        if (params.Video) {
            this.Video = new Array();
            for (let z in params.Video) {
                let obj = new FlowMediaVideo();
                obj.deserialize(params.Video[z]);
                this.Video.push(obj);
            }
        }

        if (params.Audio) {
            this.Audio = new Array();
            for (let z in params.Audio) {
                let obj = new FlowMediaAudio();
                obj.deserialize(params.Audio[z]);
                this.Audio.push(obj);
            }
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;

    }
}

/**
 * SRT configuration information of the queried output.
 * @class
 */
class DescribeOutputSRTSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * A list of the destination addresses for relay. This parameter is valid if `Mode` is `CALLER`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<SRTAddressDestination> || null}
         */
        this.Destinations = null;

        /**
         * Stream ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * Latency.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Latency = null;

        /**
         * Receive latency.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RecvLatency = null;

        /**
         * Peer latency.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PeerLatency = null;

        /**
         * Peer idle timeout period.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PeerIdleTimeout = null;

        /**
         * Encryption key.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Passphrase = null;

        /**
         * Encryption key length.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PbKeyLen = null;

        /**
         * The SRT mode.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * The server’s listen address, which is valid if `Mode` is `LISTENER`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<OutputSRTSourceAddressResp> || null}
         */
        this.SourceAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new SRTAddressDestination();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.Latency = 'Latency' in params ? params.Latency : null;
        this.RecvLatency = 'RecvLatency' in params ? params.RecvLatency : null;
        this.PeerLatency = 'PeerLatency' in params ? params.PeerLatency : null;
        this.PeerIdleTimeout = 'PeerIdleTimeout' in params ? params.PeerIdleTimeout : null;
        this.Passphrase = 'Passphrase' in params ? params.Passphrase : null;
        this.PbKeyLen = 'PbKeyLen' in params ? params.PbKeyLen : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.SourceAddresses) {
            this.SourceAddresses = new Array();
            for (let z in params.SourceAddresses) {
                let obj = new OutputSRTSourceAddressResp();
                obj.deserialize(params.SourceAddresses[z]);
                this.SourceAddresses.push(obj);
            }
        }

    }
}

/**
 * DeleteStreamLinkOutput response structure.
 * @class
 */
class DeleteStreamLinkOutputResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartStreamLinkFlow response structure.
 * @class
 */
class StartStreamLinkFlowResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RTMP pull configuration of the output
 * @class
 */
class DescribeOutputRTMPPullSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of pull URLs
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<DescribeOutputRTMPPullServerUrl> || null}
         */
        this.ServerUrls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ServerUrls) {
            this.ServerUrls = new Array();
            for (let z in params.ServerUrls) {
                let obj = new DescribeOutputRTMPPullServerUrl();
                obj.deserialize(params.ServerUrls[z]);
                this.ServerUrls.push(obj);
            }
        }

    }
}

/**
 * DescribeStreamLinkFlows response structure.
 * @class
 */
class DescribeStreamLinkFlowsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of the configuration information of the flows
         * @type {Array.<DescribeFlow> || null}
         */
        this.Infos = null;

        /**
         * Number of the current page
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number of entries
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of pages
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new DescribeFlow();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The video data of a flow.
 * @class
 */
class FlowMediaVideo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The frame rate.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * The bitrate (bps).
         * @type {number || null}
         */
        this.Rate = null;

        /**
         * The video PID.
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * The ID of a push session.
         * @type {string || null}
         */
        this.SessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * CreateStreamLinkOutputInfo request structure.
 * @class
 */
class CreateStreamLinkOutputInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * The output configuration of the flow.
         * @type {CreateOutputInfo || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.Output) {
            let obj = new CreateOutputInfo();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * DeleteStreamLinkFlow response structure.
 * @class
 */
class DeleteStreamLinkFlowResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamLinkRegions response structure.
 * @class
 */
class DescribeStreamLinkRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * StreamLink region information
         * @type {StreamLinkRegionInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new StreamLinkRegionInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamLinkFlowSRTStatistics response structure.
 * @class
 */
class DescribeStreamLinkFlowSRTStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * A list of the SRT streaming performance data.
         * @type {Array.<FlowSRTInfo> || null}
         */
        this.Infos = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new FlowSRTInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The new output configuration.
 * @class
 */
class ModifyOutputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the output to modify.
         * @type {string || null}
         */
        this.OutputId = null;

        /**
         * The output name.
         * @type {string || null}
         */
        this.OutputName = null;

        /**
         * The description of the output.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The output protocol. Valid values: SRT, RTP, RTMP.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * The SRT relay configuration.
         * @type {CreateOutputSrtSettings || null}
         */
        this.SRTSettings = null;

        /**
         * The RTP relay configuration.
         * @type {CreateOutputInfoRTPSettings || null}
         */
        this.RTPSettings = null;

        /**
         * The RTMP relay configuration.
         * @type {CreateOutputRTMPSettings || null}
         */
        this.RTMPSettings = null;

        /**
         * The IP allowlist. The address must be in CIDR format, such as `0.0.0.0/0`.
This parameter is valid if `Protocol` is set to `RTMP_PULL`. If it is left empty, there is no restriction on clients’ IP addresses.
         * @type {Array.<string> || null}
         */
        this.AllowIpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutputId = 'OutputId' in params ? params.OutputId : null;
        this.OutputName = 'OutputName' in params ? params.OutputName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.SRTSettings) {
            let obj = new CreateOutputSrtSettings();
            obj.deserialize(params.SRTSettings)
            this.SRTSettings = obj;
        }

        if (params.RTPSettings) {
            let obj = new CreateOutputInfoRTPSettings();
            obj.deserialize(params.RTPSettings)
            this.RTPSettings = obj;
        }

        if (params.RTMPSettings) {
            let obj = new CreateOutputRTMPSettings();
            obj.deserialize(params.RTMPSettings)
            this.RTMPSettings = obj;
        }
        this.AllowIpList = 'AllowIpList' in params ? params.AllowIpList : null;

    }
}

/**
 * ModifyStreamLinkInput request structure.
 * @class
 */
class ModifyStreamLinkInputRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * The input information to modify.
         * @type {ModifyInput || null}
         */
        this.Input = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.Input) {
            let obj = new ModifyInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

    }
}

/**
 * RTP configuration information of the queried output.
 * @class
 */
class DescribeOutputRTPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Destination address information list of RTP push.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RTPAddressDestination> || null}
         */
        this.Destinations = null;

        /**
         * Whether it is FEC.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FEC = null;

        /**
         * Idle timeout period.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IdleTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new RTPAddressDestination();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }
        this.FEC = 'FEC' in params ? params.FEC : null;
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;

    }
}

/**
 * SRT configuration information of the queried input.
 * @class
 */
class DescribeInputSRTSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SRT mode.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * Stream ID.
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * Latency.
         * @type {number || null}
         */
        this.Latency = null;

        /**
         * Receive latency.
         * @type {number || null}
         */
        this.RecvLatency = null;

        /**
         * Peer latency.
         * @type {number || null}
         */
        this.PeerLatency = null;

        /**
         * Peer idle timeout period.
         * @type {number || null}
         */
        this.PeerIdleTimeout = null;

        /**
         * Decryption key.
         * @type {string || null}
         */
        this.Passphrase = null;

        /**
         * Key length.
         * @type {number || null}
         */
        this.PbKeyLen = null;

        /**
         * The SRT peer address.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<SRTSourceAddressResp> || null}
         */
        this.SourceAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.Latency = 'Latency' in params ? params.Latency : null;
        this.RecvLatency = 'RecvLatency' in params ? params.RecvLatency : null;
        this.PeerLatency = 'PeerLatency' in params ? params.PeerLatency : null;
        this.PeerIdleTimeout = 'PeerIdleTimeout' in params ? params.PeerIdleTimeout : null;
        this.Passphrase = 'Passphrase' in params ? params.Passphrase : null;
        this.PbKeyLen = 'PbKeyLen' in params ? params.PbKeyLen : null;

        if (params.SourceAddresses) {
            this.SourceAddresses = new Array();
            for (let z in params.SourceAddresses) {
                let obj = new SRTSourceAddressResp();
                obj.deserialize(params.SourceAddresses[z]);
                this.SourceAddresses.push(obj);
            }
        }

    }
}

/**
 * The SRT input address.
 * @class
 */
class SRTSourceAddressResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * The peer IP.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * The peer port.
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * DescribeStreamLinkFlowStatistics response structure.
 * @class
 */
class DescribeStreamLinkFlowStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * A list of the media data.
         * @type {Array.<FlowStatisticsArray> || null}
         */
        this.Infos = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new FlowStatisticsArray();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StreamLink region information
 * @class
 */
class StreamLinkRegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of StreamLink regions
         * @type {Array.<RegionInfo> || null}
         */
        this.Regions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Regions) {
            this.Regions = new Array();
            for (let z in params.Regions) {
                let obj = new RegionInfo();
                obj.deserialize(params.Regions[z]);
                this.Regions.push(obj);
            }
        }

    }
}

/**
 * The new input configuration.
 * @class
 */
class ModifyInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * The input ID.
         * @type {string || null}
         */
        this.InputId = null;

        /**
         * The input name.
         * @type {string || null}
         */
        this.InputName = null;

        /**
         * The description of the input.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The IP addresses (CIDR) allowed to push streams.
         * @type {Array.<string> || null}
         */
        this.AllowIpList = null;

        /**
         * The SRT configuration information.
         * @type {CreateInputSRTSettings || null}
         */
        this.SRTSettings = null;

        /**
         * The RTP configuration information.
         * @type {CreateInputRTPSettings || null}
         */
        this.RTPSettings = null;

        /**
         * The input protocol. Valid values: SRT, RTP, RTMP.
If there is an RTP input, the output must be RTP.
If there is an RTMP input, the output must be SRT or RTMP.
If there is an SRT input, the output must be SRT.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Whether to enable input failover. Valid values: OPEN, CLOSE.
         * @type {string || null}
         */
        this.FailOver = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputId = 'InputId' in params ? params.InputId : null;
        this.InputName = 'InputName' in params ? params.InputName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AllowIpList = 'AllowIpList' in params ? params.AllowIpList : null;

        if (params.SRTSettings) {
            let obj = new CreateInputSRTSettings();
            obj.deserialize(params.SRTSettings)
            this.SRTSettings = obj;
        }

        if (params.RTPSettings) {
            let obj = new CreateInputRTPSettings();
            obj.deserialize(params.RTPSettings)
            this.RTPSettings = obj;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.FailOver = 'FailOver' in params ? params.FailOver : null;

    }
}

/**
 * The real-time SRT streaming information of a flow.
 * @class
 */
class FlowRealtimeStatusSRT extends  AbstractModel {
    constructor(){
        super();

        /**
         * The latency (ms).
         * @type {number || null}
         */
        this.Latency = null;

        /**
         * RTT (ms).
         * @type {number || null}
         */
        this.RTT = null;

        /**
         * The number of packets sent or received.
         * @type {number || null}
         */
        this.Packets = null;

        /**
         * The packet loss rate.
         * @type {number || null}
         */
        this.PacketLossRate = null;

        /**
         * The retransmission rate.
         * @type {number || null}
         */
        this.RetransmitRate = null;

        /**
         * The number of packets dropped.
         * @type {number || null}
         */
        this.DroppedPackets = null;

        /**
         * Whether to encrypt the stream. Valid values: On, Off.
         * @type {string || null}
         */
        this.Encryption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Latency = 'Latency' in params ? params.Latency : null;
        this.RTT = 'RTT' in params ? params.RTT : null;
        this.Packets = 'Packets' in params ? params.Packets : null;
        this.PacketLossRate = 'PacketLossRate' in params ? params.PacketLossRate : null;
        this.RetransmitRate = 'RetransmitRate' in params ? params.RetransmitRate : null;
        this.DroppedPackets = 'DroppedPackets' in params ? params.DroppedPackets : null;
        this.Encryption = 'Encryption' in params ? params.Encryption : null;

    }
}

/**
 * CreateStreamLinkFlow response structure.
 * @class
 */
class CreateStreamLinkFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of the created flow
         * @type {DescribeFlow || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new DescribeFlow();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Destination address information of RTP push.
 * @class
 */
class RTPAddressDestination extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push destination address IP.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Push destination address port.
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * The SRT configuration of the output to create.
 * @class
 */
class CreateOutputSrtSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * The relay destination address, which is required if `Mode` is `CALLER`. Only one address is allowed.
         * @type {Array.<CreateOutputSrtSettingsDestinations> || null}
         */
        this.Destinations = null;

        /**
         * The stream ID for relay, which can contain 0 to 512 letters, digits, and special characters (.#!:&,=_-).
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * The total latency (ms) of SRT relay. Value range: [0, 3000]. Default: 0.
         * @type {number || null}
         */
        this.Latency = null;

        /**
         * The receive latency (ms) of SRT relay. Value range: [0, 3000]. Default: 120.
         * @type {number || null}
         */
        this.RecvLatency = null;

        /**
         * The peer-to-peer latency (ms) of SRT relay. Value range: [0, 3000]. Default: 0.
         * @type {number || null}
         */
        this.PeerLatency = null;

        /**
         * The timeout period (ms) for the SRT relay peer. Value range: [1000, 10000]. Default: 5000.
         * @type {number || null}
         */
        this.PeerIdleTimeout = null;

        /**
         * The encryption key for SRT relay, which is empty by default, indicating not to encrypt. Only ASCII codes are allowed. Length: [10, 79].
         * @type {string || null}
         */
        this.Passphrase = null;

        /**
         * The key length for SRT relay. Valid values: 0 (default), 16, 24, 32.
         * @type {number || null}
         */
        this.PbKeyLen = null;

        /**
         * The SRT mode. Valid values: LISTENER, CALLER (default).
         * @type {string || null}
         */
        this.Mode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new CreateOutputSrtSettingsDestinations();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.Latency = 'Latency' in params ? params.Latency : null;
        this.RecvLatency = 'RecvLatency' in params ? params.RecvLatency : null;
        this.PeerLatency = 'PeerLatency' in params ? params.PeerLatency : null;
        this.PeerIdleTimeout = 'PeerIdleTimeout' in params ? params.PeerIdleTimeout : null;
        this.Passphrase = 'Passphrase' in params ? params.Passphrase : null;
        this.PbKeyLen = 'PbKeyLen' in params ? params.PbKeyLen : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * Destination address information of RTMP push.
 * @class
 */
class RTMPAddressDestination extends  AbstractModel {
    constructor(){
        super();

        /**
         * Destination URL of RTMP push in the format of 'rtmp://domain/live'.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Destination `StreamKey` of RTMP push in the format of 'streamid?key=value'.
         * @type {string || null}
         */
        this.StreamKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.StreamKey = 'StreamKey' in params ? params.StreamKey : null;

    }
}

/**
 * RTP configuration information of the created input.
 * @class
 */
class CreateInputRTPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Default value: none. Valid values: ['none'].
         * @type {string || null}
         */
        this.FEC = null;

        /**
         * Idle timeout period in ms. Default value: 5000. Value range: [1000, 10000].
         * @type {number || null}
         */
        this.IdleTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FEC = 'FEC' in params ? params.FEC : null;
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;

    }
}

/**
 * CreateStreamLinkOutputInfo response structure.
 * @class
 */
class CreateStreamLinkOutputInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The information of the created output.
         * @type {DescribeOutput || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new DescribeOutput();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamLinkFlowLogs request structure.
 * @class
 */
class DescribeStreamLinkFlowLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * The start time for query, which is 1 hour ago by default. You can query statistics in the last 7 days.
It must be in UTC format, such as `2020-01-01T12:00:00Z`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time for query, which is 1 hour after the start time by default. The longest time range allowed for query is 24 hours.
It must be in UTC format, such as `2020-01-01T12:00:00Z`.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Whether to query the inputs or outputs. Valid values: input, output.
         * @type {Array.<string> || null}
         */
        this.Type = null;

        /**
         * Whether to query the primary or backup pipeline. Valid values: 0, 1.
         * @type {Array.<string> || null}
         */
        this.Pipeline = null;

        /**
         * The page size. Value range: [1, 1000]. Default: 100.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Whether to sort the records by timestamp in descending or ascending order. Valid values: desc (default), asc.
         * @type {string || null}
         */
        this.SortType = null;

        /**
         * The page number. Value range: [1, 1000]. Default: 1.
         * @type {number || null}
         */
        this.PageNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Pipeline = 'Pipeline' in params ? params.Pipeline : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.SortType = 'SortType' in params ? params.SortType : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;

    }
}

/**
 * DescribeStreamLinkFlows request structure.
 * @class
 */
class DescribeStreamLinkFlowsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of the current page. Default value: `1`
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page. Default value: `10`
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * The real-time RTMP streaming information of a flow.
 * @class
 */
class FlowRealtimeStatusRTMP extends  AbstractModel {
    constructor(){
        super();

        /**
         * The video frame rate.
         * @type {number || null}
         */
        this.VideoFPS = null;

        /**
         * The audio frame rate.
         * @type {number || null}
         */
        this.AudioFPS = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VideoFPS = 'VideoFPS' in params ? params.VideoFPS : null;
        this.AudioFPS = 'AudioFPS' in params ? params.AudioFPS : null;

    }
}

/**
 * The common real-time status information of a flow.
 * @class
 */
class FlowRealtimeStatusCommon extends  AbstractModel {
    constructor(){
        super();

        /**
         * The connection status. Valid values: Connected, Waiting, Idle.
         * @type {string || null}
         */
        this.State = null;

        /**
         * The connection mode. Valid values: Listener, Caller.
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * The connected time.
         * @type {number || null}
         */
        this.ConnectedTime = null;

        /**
         * The real-time bitrate (bps).
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * The number of retries.
         * @type {number || null}
         */
        this.Reconnections = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.State = 'State' in params ? params.State : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.ConnectedTime = 'ConnectedTime' in params ? params.ConnectedTime : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Reconnections = 'Reconnections' in params ? params.Reconnections : null;

    }
}

/**
 * The real-time status information of a flow.
 * @class
 */
class FlowRealtimeStatusItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is an input or output. Valid values: Input, Output.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The input ID, which is not empty if `Type` is `Input`.
         * @type {string || null}
         */
        this.InputId = null;

        /**
         * The output ID, which is not empty if `Type` is `Output`.
         * @type {string || null}
         */
        this.OutputId = null;

        /**
         * The flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * The protocol used. Valid values: SRT, RTP, RTMP.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * The common status information.
         * @type {FlowRealtimeStatusCommon || null}
         */
        this.CommonStatus = null;

        /**
         * This parameter is returned if `Protocol` is `SRT`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {FlowRealtimeStatusSRT || null}
         */
        this.SRTStatus = null;

        /**
         * This parameter is returned if `Protocol` is `RTMP`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {FlowRealtimeStatusRTMP || null}
         */
        this.RTMPStatus = null;

        /**
         * The server IP.
         * @type {string || null}
         */
        this.ConnectServerIP = null;

        /**
         * This parameter is returned if the RTP protocol is used.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {FlowRealtimeStatusRTP || null}
         */
        this.RTPStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.InputId = 'InputId' in params ? params.InputId : null;
        this.OutputId = 'OutputId' in params ? params.OutputId : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.CommonStatus) {
            let obj = new FlowRealtimeStatusCommon();
            obj.deserialize(params.CommonStatus)
            this.CommonStatus = obj;
        }

        if (params.SRTStatus) {
            let obj = new FlowRealtimeStatusSRT();
            obj.deserialize(params.SRTStatus)
            this.SRTStatus = obj;
        }

        if (params.RTMPStatus) {
            let obj = new FlowRealtimeStatusRTMP();
            obj.deserialize(params.RTMPStatus)
            this.RTMPStatus = obj;
        }
        this.ConnectServerIP = 'ConnectServerIP' in params ? params.ConnectServerIP : null;

        if (params.RTPStatus) {
            let obj = new FlowRealtimeStatusRTP();
            obj.deserialize(params.RTPStatus)
            this.RTPStatus = obj;
        }

    }
}

/**
 * ModifyStreamLinkOutputInfo request structure.
 * @class
 */
class ModifyStreamLinkOutputInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * The output configuration to modify.
         * @type {ModifyOutputInfo || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.Output) {
            let obj = new ModifyOutputInfo();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

module.exports = {
    DescribeOutputRTMPSettings: DescribeOutputRTMPSettings,
    DescribeStreamLinkFlowLogsResponse: DescribeStreamLinkFlowLogsResponse,
    OutputAddress: OutputAddress,
    OutputSRTSourceAddressResp: OutputSRTSourceAddressResp,
    InputAddress: InputAddress,
    DescribeInputRTPSettings: DescribeInputRTPSettings,
    FlowRealtimeStatusRTP: FlowRealtimeStatusRTP,
    DescribeStreamLinkRegionsRequest: DescribeStreamLinkRegionsRequest,
    ModifyStreamLinkFlowRequest: ModifyStreamLinkFlowRequest,
    DeleteStreamLinkFlowRequest: DeleteStreamLinkFlowRequest,
    DescribeStreamLinkFlowMediaStatisticsResponse: DescribeStreamLinkFlowMediaStatisticsResponse,
    ModifyStreamLinkInputResponse: ModifyStreamLinkInputResponse,
    CreateOutputInfoRTPSettings: CreateOutputInfoRTPSettings,
    CreateStreamLinkFlowRequest: CreateStreamLinkFlowRequest,
    StartStreamLinkFlowRequest: StartStreamLinkFlowRequest,
    CreateOutputSrtSettingsDestinations: CreateOutputSrtSettingsDestinations,
    SRTAddressDestination: SRTAddressDestination,
    DescribeStreamLinkFlowStatisticsRequest: DescribeStreamLinkFlowStatisticsRequest,
    SRTSourceAddressReq: SRTSourceAddressReq,
    DescribeOutput: DescribeOutput,
    DescribeFlow: DescribeFlow,
    DeleteStreamLinkOutputRequest: DeleteStreamLinkOutputRequest,
    FlowStatisticsArray: FlowStatisticsArray,
    CreateInputSRTSettings: CreateInputSRTSettings,
    FlowMediaAudio: FlowMediaAudio,
    DescribeInputRTMPSettings: DescribeInputRTMPSettings,
    ModifyStreamLinkFlowResponse: ModifyStreamLinkFlowResponse,
    DescribeStreamLinkFlowRequest: DescribeStreamLinkFlowRequest,
    RegionInfo: RegionInfo,
    DescribeStreamLinkFlowMediaStatisticsRequest: DescribeStreamLinkFlowMediaStatisticsRequest,
    DescribeStreamLinkFlowRealtimeStatusRequest: DescribeStreamLinkFlowRealtimeStatusRequest,
    ModifyStreamLinkOutputInfoResponse: ModifyStreamLinkOutputInfoResponse,
    DescribeStreamLinkFlowResponse: DescribeStreamLinkFlowResponse,
    StopStreamLinkFlowResponse: StopStreamLinkFlowResponse,
    FlowSRTInfo: FlowSRTInfo,
    FlowStatistics: FlowStatistics,
    DescribeStreamLinkFlowSRTStatisticsRequest: DescribeStreamLinkFlowSRTStatisticsRequest,
    DescribeStreamLinkFlowRealtimeStatusResponse: DescribeStreamLinkFlowRealtimeStatusResponse,
    FlowAudio: FlowAudio,
    CreateOutputRTPSettingsDestinations: CreateOutputRTPSettingsDestinations,
    FlowVideo: FlowVideo,
    StopStreamLinkFlowRequest: StopStreamLinkFlowRequest,
    CreateInput: CreateInput,
    CreateOutputRTMPSettings: CreateOutputRTMPSettings,
    DescribeOutputRTMPPullServerUrl: DescribeOutputRTMPPullServerUrl,
    DescribeInput: DescribeInput,
    CreateOutputRtmpSettingsDestinations: CreateOutputRtmpSettingsDestinations,
    CreateOutputInfo: CreateOutputInfo,
    FlowLogInfo: FlowLogInfo,
    FlowMediaInfo: FlowMediaInfo,
    DescribeOutputSRTSettings: DescribeOutputSRTSettings,
    DeleteStreamLinkOutputResponse: DeleteStreamLinkOutputResponse,
    StartStreamLinkFlowResponse: StartStreamLinkFlowResponse,
    DescribeOutputRTMPPullSettings: DescribeOutputRTMPPullSettings,
    DescribeStreamLinkFlowsResponse: DescribeStreamLinkFlowsResponse,
    FlowMediaVideo: FlowMediaVideo,
    CreateStreamLinkOutputInfoRequest: CreateStreamLinkOutputInfoRequest,
    DeleteStreamLinkFlowResponse: DeleteStreamLinkFlowResponse,
    DescribeStreamLinkRegionsResponse: DescribeStreamLinkRegionsResponse,
    DescribeStreamLinkFlowSRTStatisticsResponse: DescribeStreamLinkFlowSRTStatisticsResponse,
    ModifyOutputInfo: ModifyOutputInfo,
    ModifyStreamLinkInputRequest: ModifyStreamLinkInputRequest,
    DescribeOutputRTPSettings: DescribeOutputRTPSettings,
    DescribeInputSRTSettings: DescribeInputSRTSettings,
    SRTSourceAddressResp: SRTSourceAddressResp,
    DescribeStreamLinkFlowStatisticsResponse: DescribeStreamLinkFlowStatisticsResponse,
    StreamLinkRegionInfo: StreamLinkRegionInfo,
    ModifyInput: ModifyInput,
    FlowRealtimeStatusSRT: FlowRealtimeStatusSRT,
    CreateStreamLinkFlowResponse: CreateStreamLinkFlowResponse,
    RTPAddressDestination: RTPAddressDestination,
    CreateOutputSrtSettings: CreateOutputSrtSettings,
    RTMPAddressDestination: RTMPAddressDestination,
    CreateInputRTPSettings: CreateInputRTPSettings,
    CreateStreamLinkOutputInfoResponse: CreateStreamLinkOutputInfoResponse,
    DescribeStreamLinkFlowLogsRequest: DescribeStreamLinkFlowLogsRequest,
    DescribeStreamLinkFlowsRequest: DescribeStreamLinkFlowsRequest,
    FlowRealtimeStatusRTMP: FlowRealtimeStatusRTMP,
    FlowRealtimeStatusCommon: FlowRealtimeStatusCommon,
    FlowRealtimeStatusItem: FlowRealtimeStatusItem,
    ModifyStreamLinkOutputInfoRequest: ModifyStreamLinkOutputInfoRequest,

}
