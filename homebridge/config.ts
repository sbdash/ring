import { RingAlarmOptions } from '../api'

export interface RingAlarmPlatformConfig extends RingAlarmOptions {
  alarmOnEntryDelay?: boolean
  beamDurationSeconds?: number
  hideLightGroups?: boolean
  hideDoorbellSwitch?: boolean
  hideCameraMotionSensor?: boolean
  hideAlarmSirenSwitch?: boolean
}
