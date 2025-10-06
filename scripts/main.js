import { world, BlockPermutation } from "@minecraft/server";


world.afterEvents.playerBreakBlock.subscribe((event) => {
    const brokenType = event.brokenBlockPermutation.type.id; // the one who was demolished
    let isPlant = false;
    let plant;
    let grothStateCount = 7;
    switch (brokenType) {
        case ("minecraft:wheat"):
            plant = brokenType;
            isPlant = true;
            break;
        case ("minecraft:carrots"):
            plant = brokenType;
            isPlant = true;
            break;
        case ("minecraft:potatoes"):
            plant = brokenType;
            isPlant = true;
            break;
        case ("minecraft:beetroot"):
            plant = brokenType;
            isPlant = true;
            break;
    }


    if (isPlant) {
        const growthState = event.brokenBlockPermutation.getState("growth");
        const leSneak = event.player.isSneaking;

        if (growthState === grothStateCount && leSneak) {

            const location = event.block.location;
            const dimension = event.dimension;
            const leBlock = BlockPermutation.resolve(plant, { "growth": 0 });
            dimension.setBlockPermutation(location, leBlock);

        }
    }
});
