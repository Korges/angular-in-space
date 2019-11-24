export interface DecoderResult {
  key: string;
  valid: boolean;
  correctPositionCount: number;
  correctOccurrenceCount: number;
  incorrectCount: number;
}
