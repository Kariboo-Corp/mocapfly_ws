
"use strict";

let ActuatorControl = require('./ActuatorControl.js');
let BatteryStatus = require('./BatteryStatus.js');
let Altitude = require('./Altitude.js');
let ManualControl = require('./ManualControl.js');
let State = require('./State.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let Waypoint = require('./Waypoint.js');
let Mavlink = require('./Mavlink.js');
let GPSINPUT = require('./GPSINPUT.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let Thrust = require('./Thrust.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let LogEntry = require('./LogEntry.js');
let Trajectory = require('./Trajectory.js');
let RadioStatus = require('./RadioStatus.js');
let TerrainReport = require('./TerrainReport.js');
let MagnetometerReporter = require('./MagnetometerReporter.js');
let GPSRTK = require('./GPSRTK.js');
let HilSensor = require('./HilSensor.js');
let HomePosition = require('./HomePosition.js');
let GPSRAW = require('./GPSRAW.js');
let RTKBaseline = require('./RTKBaseline.js');
let ExtendedState = require('./ExtendedState.js');
let ESCTelemetryItem = require('./ESCTelemetryItem.js');
let ESCStatus = require('./ESCStatus.js');
let ESCInfo = require('./ESCInfo.js');
let WaypointList = require('./WaypointList.js');
let Vibration = require('./Vibration.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let ESCInfoItem = require('./ESCInfoItem.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let LandingTarget = require('./LandingTarget.js');
let RCOut = require('./RCOut.js');
let VehicleInfo = require('./VehicleInfo.js');
let PositionTarget = require('./PositionTarget.js');
let CellularStatus = require('./CellularStatus.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let NavControllerOutput = require('./NavControllerOutput.js');
let HilGPS = require('./HilGPS.js');
let LogData = require('./LogData.js');
let ParamValue = require('./ParamValue.js');
let CommandCode = require('./CommandCode.js');
let VFR_HUD = require('./VFR_HUD.js');
let HilControls = require('./HilControls.js');
let PlayTuneV2 = require('./PlayTuneV2.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let Param = require('./Param.js');
let FileEntry = require('./FileEntry.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let StatusText = require('./StatusText.js');
let ESCTelemetry = require('./ESCTelemetry.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let Tunnel = require('./Tunnel.js');
let RTCM = require('./RTCM.js');
let RCIn = require('./RCIn.js');
let ESCStatusItem = require('./ESCStatusItem.js');
let WaypointReached = require('./WaypointReached.js');
let CameraImageCaptured = require('./CameraImageCaptured.js');
let DebugValue = require('./DebugValue.js');
let MountControl = require('./MountControl.js');

module.exports = {
  ActuatorControl: ActuatorControl,
  BatteryStatus: BatteryStatus,
  Altitude: Altitude,
  ManualControl: ManualControl,
  State: State,
  HilActuatorControls: HilActuatorControls,
  Waypoint: Waypoint,
  Mavlink: Mavlink,
  GPSINPUT: GPSINPUT,
  WheelOdomStamped: WheelOdomStamped,
  CompanionProcessStatus: CompanionProcessStatus,
  OnboardComputerStatus: OnboardComputerStatus,
  Thrust: Thrust,
  TimesyncStatus: TimesyncStatus,
  HilStateQuaternion: HilStateQuaternion,
  LogEntry: LogEntry,
  Trajectory: Trajectory,
  RadioStatus: RadioStatus,
  TerrainReport: TerrainReport,
  MagnetometerReporter: MagnetometerReporter,
  GPSRTK: GPSRTK,
  HilSensor: HilSensor,
  HomePosition: HomePosition,
  GPSRAW: GPSRAW,
  RTKBaseline: RTKBaseline,
  ExtendedState: ExtendedState,
  ESCTelemetryItem: ESCTelemetryItem,
  ESCStatus: ESCStatus,
  ESCInfo: ESCInfo,
  WaypointList: WaypointList,
  Vibration: Vibration,
  EstimatorStatus: EstimatorStatus,
  ESCInfoItem: ESCInfoItem,
  CamIMUStamp: CamIMUStamp,
  LandingTarget: LandingTarget,
  RCOut: RCOut,
  VehicleInfo: VehicleInfo,
  PositionTarget: PositionTarget,
  CellularStatus: CellularStatus,
  ADSBVehicle: ADSBVehicle,
  NavControllerOutput: NavControllerOutput,
  HilGPS: HilGPS,
  LogData: LogData,
  ParamValue: ParamValue,
  CommandCode: CommandCode,
  VFR_HUD: VFR_HUD,
  HilControls: HilControls,
  PlayTuneV2: PlayTuneV2,
  OverrideRCIn: OverrideRCIn,
  Param: Param,
  FileEntry: FileEntry,
  AttitudeTarget: AttitudeTarget,
  OpticalFlowRad: OpticalFlowRad,
  StatusText: StatusText,
  ESCTelemetry: ESCTelemetry,
  GlobalPositionTarget: GlobalPositionTarget,
  Tunnel: Tunnel,
  RTCM: RTCM,
  RCIn: RCIn,
  ESCStatusItem: ESCStatusItem,
  WaypointReached: WaypointReached,
  CameraImageCaptured: CameraImageCaptured,
  DebugValue: DebugValue,
  MountControl: MountControl,
};
