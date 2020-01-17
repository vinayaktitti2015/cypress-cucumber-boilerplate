const compareSnapshotCommand = require('cypress-visual-regression/dist/command');
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';


compareSnapshotCommand();
addMatchImageSnapshotCommand({
    failureThreshold: 0.00,
    failureThresholdType: 'percent',
    customDiffConfig: { threshold: 0.0 },
    capture: 'fullPage',
    timeout: "60000"
});