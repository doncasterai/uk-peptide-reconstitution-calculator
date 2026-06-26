/**
 * Scientific Peptide Reconstitution Calculator
 * 
 * This mathematical framework calculates the precise concentration per tick/unit
 * on a standard laboratory syringe based on vial mass and bacteriostatic water volume.
 */

function calculateReconstitution(vialMg, waterMl, desiredMcg) {
    const totalMcg = vialMg * 1000; // Convert mg to mcg
    const totalTicks = 100; // Standard 1ml insulin/laboratory syringe has 100 units
    
    const mcgPerMl = totalMcg / waterMl;
    const mcgPerTick = mcgPerMl / totalTicks;
    const ticksRequired = desiredMcg / mcgPerTick;

    return {
        vialTotalMcg: totalMcg,
        concentrationPerMl: mcgPerMl,
        concentrationPerTick: mcgPerTick,
        unitsRequiredForDose: Math.round(ticksRequired * 10) / 10
    };
}
