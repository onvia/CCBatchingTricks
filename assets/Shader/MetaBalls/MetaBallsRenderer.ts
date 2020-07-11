import MetaBallsAssembler from "./MetaBallsAssembler";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MetaBallsRenderer extends cc.Sprite {
    onEnable() {
        super.onEnable();
        // if (!CC_EDITOR && !CC_NATIVERENDERER)
        //     this.node._renderFlag |= cc.RenderFlow.FLAG_RENDER;
    }

    public SetXX(particles) {
        this._assembler.particles = particles;
    }

    _resetAssembler() {
        this.setVertsDirty();
        let assembler = this._assembler = new MetaBallsAssembler();
        assembler.init(this);
    }
}
