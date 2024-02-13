export class AlarmSeverity {
  constructor(readonly value: 'critical' | 'high' | 'medium' | 'low') {}

  equals(severity: AlarmSeverity): boolean {
    return severity.value === this.value;
  }
}
