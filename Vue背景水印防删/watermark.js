import useWatermarkBg from './useWatermarkBg.js';
const { ref, onMounted, onUnmounted } = Vue;
export const watermark = {
    props: {
        text: {
            type: String,
            required: true,
            default: 'watermark'
        },
        fontSize: {
            type: Number,
            default: 20
        },
        gap: {
            type: Number,
            default: 20
        },
        clickThrough: {
            type: Boolean,
            default: true
        }
    },
    template: `
    <div class="watermark-container overflow-hidden relative " ref="parent">
        <slot />
    </div>
`,
    setup(props, ctx) {

        const parent = ref(null);
        const bg = useWatermarkBg(props)

        const ob = new MutationObserver((mutationsList, observer) => {
            console.log("变化了!!!!");
            console.log(mutationsList);
            for (const entry of mutationsList) {
                // 处理删除
                for (const node of entry.removedNodes) {
                    if (node === div) {
                        console.log("删除了水印");
                        resetWatermark();
                    }
                }

                // 属性修改
                if (entry.target === div) {
                    resetWatermark();
                }
            }
        })

        onUnmounted(() => {
            ob.disconnect();
        })

        onMounted(() => {
            resetWatermark();
            ob.observe(parent.value, {
                attributes: true,    // 属性的变化
                childList: true, // 子节点的变化
                subtree: true // 所有后代节点
            })

        });

        let div;
        // 重置水印
        function resetWatermark() {
            if (!parent.value) return;
            if (div) div.remove();
            const { base64, size } = bg.value;
            div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.backgroundImage = `url(${base64})`;
            div.style.backgroundSize = `${size}px ${size}px`;
            div.style.backgroundRepeat = 'repeat';
            div.style.zIndex = 9999;
            div.style.inset = 0;
            if (props.clickThrough) {
                div.style.pointerEvents = 'none';
            }



            parent.value.appendChild(div);
        }
        return { parent }

    },
}
