import { describe, it, expect } from 'vitest';
import { MODDED_MAP_PRESETS, buildLaunchArgs, isOfficialMap } from '../moddedMapRegistry';

describe('moddedMapRegistry - Insaluna and Map Presets', () => {
  it('should have the correct CurseForge project ID 939532 for Insaluna', () => {
    const insaluna = MODDED_MAP_PRESETS.find(p => p.mapArgument === 'Insaluna_WP');
    expect(insaluna).toBeDefined();
    expect(insaluna?.mapModId).toBe('939532');
    expect(insaluna?.name).toBe('Insaluna');
    expect(insaluna?.author).toBe('armangamer777');
  });

  it('should build launch arguments with -MapModID=939532 and -mods=939532 for Insaluna', () => {
    const insaluna = MODDED_MAP_PRESETS.find(p => p.mapArgument === 'Insaluna_WP')!;
    const args = buildLaunchArgs(insaluna, '-clusterid=mycluster');
    expect(args).toContain('-MapModID=939532');
    expect(args).toContain('-mods=939532');
  });

  it('should accurately classify official vs custom map arguments', () => {
    expect(isOfficialMap('TheIsland_WP')).toBe(true);
    expect(isOfficialMap('Astraeos_WP')).toBe(true);
    expect(isOfficialMap('Insaluna_WP')).toBe(false);
  });
});
