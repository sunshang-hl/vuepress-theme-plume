import { h } from 'vue'
import type { FunctionalComponent } from 'vue'
import { IconBase } from './IconBase'

export const UserIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'user' }, () =>
    h('path', {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      'd': 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    })
  )
UserIcon.displayName = 'UserIcon'

export const FolderIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'folder' }, () =>
    h('path', {
      d: 'M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z',
    })
  )
FolderIcon.displayName = 'FolderIcon'

export const ClockIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'clock' }, () =>
    h('path', {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      'd': 'M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z',
    })
  )
ClockIcon.displayName = 'ClockIcon'

export const TagIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'tag' }, () =>
    h('path', {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      'd': 'M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z',
    })
  )
TagIcon.displayName = 'TagIcon'

export const TopIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'top', viewBox: '0 0 1024 1024' }, () => [
    h('path', {
      d: 'M80.96 449.194667l37.696-37.717334 19.626667 19.605334-37.717334 37.717333zM197.205333 541.44l116.16-116.138667 13.568 13.568-116.16 116.16zM220.565333 565.162667l116.16-116.16 13.568 13.589333-116.16 116.138667zM173.845333 517.738667l116.16-116.16 13.568 13.589333-116.16 116.138667zM245.354667 587.477333l116.202666-116.096 13.568 13.589334-116.202666 116.096z',
      // fill: '#FA8D14',
    }),
    h('path', {
      d: 'M339.2 0L0 345.6V1024L1024 0H339.2z m-115.2 283.733333l46.933333 46.933334-14.933333 12.8-4.266667-4.266667-140.8 140.8 4.266667 4.266667-14.933333 14.933333-46.933334-46.933333 170.666667-168.533334z m2.133333 375.466667l-12.8-12.8 29.866667-29.866667L149.333333 520.533333l64-64-12.8-12.8L108.8 533.333333l-10.666667-10.666666 89.6-89.6-10.666666-10.666667 14.933333-14.933333 10.666667 10.666666 91.733333-91.733333 10.666667 10.666667-91.733334 91.733333 12.8 12.8 68.266667-68.266667 96 96 27.733333-27.733333 12.8 12.8-204.8 204.8z m232.533334-236.8l-17.066667 17.066667c-6.4-6.4-14.933333-10.666667-21.333333-14.933334 8.533333-4.266667 14.933333-10.666667 21.333333-17.066666 6.4-6.4 6.4-12.8 0-19.2l-136.533333-136.533334-34.133334 34.133334-14.933333-17.066667L332.8 192l14.933333 14.933333-25.6 27.733334 138.666667 138.666666c14.933333 14.933333 14.933333 32-2.133333 49.066667z m-81.066667-200.533333l38.4-38.4-21.333333-34.133334-46.933334 46.933334-14.933333-14.933334 123.733333-123.733333 12.8 17.066667-59.733333 59.733333 21.333333 34.133333 57.6-57.6 98.133334 98.133334-14.933334 14.933333-83.2-83.2-78.933333 78.933333 85.333333 85.333334-14.933333 14.933333-102.4-98.133333z m138.666667 162.133333c-6.4-2.133333-14.933333-4.266667-25.6-4.266667 19.2-34.133333 25.6-61.866667 23.466666-85.333333-2.133333-21.333333-17.066667-44.8-42.666666-70.4L448 200.533333l14.933333-14.933333 23.466667 23.466667c17.066667 17.066667 29.866667 34.133333 38.4 49.066666 38.4-8.533333 74.666667-14.933333 106.666667-19.2l2.133333 25.6c-34.133333 2.133333-68.266667 8.533333-100.266667 14.933334 2.133333 4.266667 2.133333 8.533333 2.133334 12.8 6.4 23.466667 0 55.466667-19.2 91.733333z',
      // fill: '#FA8D14',
    }),
    h('path', {
      d: 'M183.765333 346.965333l37.696-37.717333 19.626667 19.584-37.696 37.738667zM132.288 398.037333l37.76-37.674666 19.584 19.626666-37.738667 37.674667z',
      // fill: '#FA8D14',
    }),
  ])
TopIcon.displayName = 'TopIcon'

export const ArrowRightIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'arrow-right', viewBox: '0 0  1024 1024' }, () =>
    h('path', {
      d: 'M761.056 532.128c0.512-0.992 1.344-1.824 1.792-2.848 8.8-18.304 5.92-40.704-9.664-55.424L399.936 139.744c-19.264-18.208-49.632-17.344-67.872 1.888-18.208 19.264-17.376 49.632 1.888 67.872l316.96 299.84-315.712 304.288c-19.072 18.4-19.648 48.768-1.248 67.872 9.408 9.792 21.984 14.688 34.56 14.688 12 0 24-4.48 33.312-13.44l350.048-337.376c0.672-0.672 0.928-1.6 1.6-2.304 0.512-0.48 1.056-0.832 1.568-1.344C757.76 538.88 759.2 535.392 761.056 532.128z',
    })
  )
ArrowRightIcon.displayName = 'ArrowRightIcon'

export const ArrowBottomIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'arrow-bottom', viewBox: '0 0 1024 1024' }, () =>
    h('path', {
      d: 'M150.001 502.111a22.487 22.487 0 0 1 13.185 4.245l348.86 250.152 348.858-250.152a22.577 22.577 0 0 1 26.28 36.665L525.14 802.656a22.577 22.577 0 0 1-26.28 0L136.816 543.02a22.577 22.577 0 0 1 13.185-40.91z m737.183-257.196L525.14 504.55a22.577 22.577 0 0 1-26.28 0L136.816 244.915a22.577 22.577 0 1 1 26.28-36.665l348.859 250.152L860.814 208.25a22.577 22.577 0 1 1 26.28 36.665z',
    })
  )
ArrowBottomIcon.displayName = 'ArrowBottomIcon'

export const BackTopIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'back-top', viewBox: '0 0 1024 1024' }, () =>
    h('path', {
      d: 'M725.902 498.916c18.205-251.45-93.298-410.738-205.369-475.592l-6.257-3.982-6.258 3.414c-111.502 64.853-224.711 224.142-204.8 475.59-55.751 53.476-80.214 116.623-80.214 204.8v15.36l179.2-35.27c11.378 40.39 58.596 69.973 113.21 69.973 54.613 0 101.262-29.582 112.64-68.836l180.337 36.41v-15.36c-0.569-89.885-25.031-153.6-82.489-206.507zM571.733 392.533c-33.564 31.29-87.04 28.445-118.329-5.12s-28.444-87.04 5.12-117.76c33.565-31.289 87.04-28.444 118.33 5.12s28.444 86.471-5.12 117.76z m-56.32 368.64c-35.84 0-64.284 29.014-64.284 64.285 0 35.84 54.044 182.613 64.284 182.613s64.285-146.773 64.285-182.613c0-35.271-29.014-64.285-64.285-64.285z',
    })
  )
BackTopIcon.displayName = 'BackTopIcon'

export const PostIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'post', viewBox: '0 0 1024 1024' }, () =>
    h('path', {
      d: 'M805.376 81.0496 188.7232 81.0496c-52.6336 0-94.8736 42.3936-94.8736 94.6176l0 664.576c0 52.2752 42.496 94.6176 94.8736 94.6176L805.376 934.8608c52.6336 0 94.8736-42.3936 94.8736-94.6176L900.2496 175.7184C900.2496 123.392 857.8048 81.0496 805.376 81.0496zM288.768 204.8c39.3216 0 71.168 31.5904 71.168 71.168 0 39.3216-31.5904 71.168-71.168 71.168-39.3216 0-71.168-31.5904-71.168-71.168C217.6 236.6464 249.1904 204.8 288.768 204.8zM506.368 741.0176 217.6 741.0176l0-47.4112L506.368 693.6064 506.368 741.0176zM671.3344 617.2672 217.6 617.2672 217.6 569.856l453.7344 0L671.3344 617.2672zM671.3344 493.568 217.6 493.568 217.6 446.1056l453.7344 0L671.3344 493.568z',
    })
  )
PostIcon.displayName = 'PostIcon'
