import * as dogNames from "https://cdn.skypack.dev/dog-names@2.0.0";
Array.prototype.random = function () {
	return this[Math.floor(Math.random() * this.length)];
};

Vue.component("MochiBox", {
	template: `
  <div class="MochiBox /" :class="[shiba, { pop: pop }]" @mouseenter="randomize" @click="randomize" tabindex="0">
    <MochiShiba 
      :size="size"
      :mood="mood" 
      :leftEye="leftEye" 
      :rightEye="rightEye" 
      :leftEar="leftEar" 
      :rightEar="rightEar"
      :blush="blush"
    />
    <div class="MochiContent">
      <slot></slot>
			<h2>おどろき</h2>
    	<h3>{{randomName}}</h3>
    </div>
    <MochiPaws :size="size" />
  </div>
  `,
	props: {
		shiba: { type: String, default: "okaka" },
		size: { type: String, default: "medium" },
		mood: { type: String, default: "" },
		leftEye: { type: String, default: "open" },
		rightEye: { type: String, default: "open" },
		leftEar: { type: String, default: "up" },
		rightEar: { type: String, default: "flat" },
		blush: { type: Boolean, default: false },
		pop: { type: Boolean, default: true }
	},
	methods: {
		randomize() {
			if (this.canRandom) {
				this.shiba = [
					"monaka",
					"sesame",
					"tuna",
					"okaka",
					"anko",
					"ume",
					"kinako",
					"sakura"
				].random();
				this.mood = [
					"",
					"happy",
					"content",
					"excited",
					"cheeky",
					"drool",
					"cute",
					"gleam"
				].random();
				this.leftEye = ["open", "wink", "shy", "laugh"].random();
				this.rightEye = ["open", "wink", "shy", "laugh"].random();
				this.leftEar = ["up", "down", "flat", "middle"].random();
				this.rightEar = ["up", "down", "flat", "middle"].random();
				this.blush = [true, false].random();
			}
		}
	},
	computed: {
		randomName: function () {
			if (["ume", "kinako", "sakura"].includes(this.shiba)) {
				return dogNames.femaleRandom();
			}
			return dogNames.maleRandom();
		}
	},
	created() {
		if (this.shiba === "random") {
			this.canRandom = true;
			this.randomize();
		}
	}
});
Vue.component("MochiShiba", {
	template: `
    <div class="MochiShiba /" :class="styleClass">
      <svg class="shiba" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="152" height="174" viewBox="0 0 152 174">
      <title>Mochi Shiba</title>
      <defs>
        <radialGradient id="cheeks" cx="105.52" cy="57.11" r="6.94" gradientTransform="translate(3.23 14.14) rotate(4.8) scale(1 0.6)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#ff90ac"/>
          <stop offset="0.26" stop-color="#ff90ac" stop-opacity="0.99"/>
          <stop offset="0.4" stop-color="#fe91ac" stop-opacity="0.96"/>
          <stop offset="0.51" stop-color="#fe92ac" stop-opacity="0.91"/>
          <stop offset="0.6" stop-color="#fd93ac" stop-opacity="0.83"/>
          <stop offset="0.68" stop-color="#fc95ac" stop-opacity="0.73"/>
          <stop offset="0.76" stop-color="#fa97ac" stop-opacity="0.61"/>
          <stop offset="0.83" stop-color="#f89aad" stop-opacity="0.47"/>
          <stop offset="0.9" stop-color="#f69dad" stop-opacity="0.3"/>
          <stop offset="0.96" stop-color="#f4a1ad" stop-opacity="0.12"/>
          <stop offset="1" stop-color="#f2a3ad" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="cheeks-2" data-name="cheeks" cx="46.94" cy="57.11" r="6.94" gradientTransform="translate(77.16 7.47) rotate(85.2) scale(1 0.6)" xlink:href="#cheeks"/>
      </defs>
      <g id="body">
        <g id="ears">
          <g id="left1">
            <path data-name="inner" class="inner outline" d="M23.58,52.49a51,51,0,0,1-4.13-16.36C18,22.57,21.93,15.68,24.16,10.92L30.43,41Z"/>
            <path data-name="top" class="fur outline" d="M55.53,17.9c-2.69-2.59-7.38-3.82-12.7-5C34.54,11,28.76,7.56,25.15,9.47c-4.72,2.48-1.45,14-.52,18.3a72.2,72.2,0,0,0,4.76,13.36"/>
          </g>
          <g id="right1">
            <path data-name="inner" class="inner outline" d="M126.47,46.91c1.24-4,2.05-8.47,2.32-16.72.28-8.73-3.51-17.9-7.45-24.54L118.4,36.26Z"/>
            <path data-name="top" class="fur outline" d="M90.92,16c2.4-2.88,6.92-4.61,12.08-6.39,8-2.77,13.4-6.82,17.2-5.33,5,2,3,13.79,2.53,18.14a72.92,72.92,0,0,1-3.28,13.81"/>
          </g>
          <g id="left2">
            <path data-name="inner" class="inner outline" d="M24.28,50.15a30.22,30.22,0,0,1-6.13-7.37c-3.29-5.19-3.29-12.59-3.29-12.59l10.48,9.15,3.28,3.12"/>
            <path data-name="fur" class="fur outline" d="M52,18.65c-4.28-1.52-12.33,1.91-20.34,3.91-6.45,1.61-16.11,1.72-16.94,5.6C14,31.51,18.81,35.9,21.16,38a35.17,35.17,0,0,0,6.17,4.09"/>
          </g>
          <g id="right2">
            <path data-name="inner" class="inner outline" d="M125.51,44.52a30.24,30.24,0,0,0,5.29-8c2.7-5.53,1.89-12.88,1.89-12.88L123.27,33.9l-2.91,3.45"/>
            <path data-name="top" class="fur outline" d="M94.51,16.24c4.09-2,12.46.55,20.65,1.67,6.58.89,16.2-.06,17.45,3.7,1.08,3.26-3.22,8.15-5.32,10.52a35.17,35.17,0,0,1-5.69,4.74"/>
          </g>
          <g id="left3">
            <path data-name="inner" class="inner outline" d="M23.1,60.86A39,39,0,0,1,15.44,54a31,31,0,0,1-4.36-6.29A28.75,28.75,0,0,1,8,35.07l10.34,9.31,9.25,1.9"/>
            <path data-name="top" class="fur outline" d="M53.78,20.06C49.52,18.48,36.56,23,28.5,24.79,21.06,26.46,8.76,29.17,7.87,33c-.77,3.35,3.81,8,6.29,10,4.73,3.78,11.68,6.13,11.68,6.13"/>
          </g>
          <g id="right3">
            <path data-name="inner" class="inner outline" d="M124.19,61.8a18.48,18.48,0,0,0,5.53,0,24.71,24.71,0,0,0,9.46-3.41,16.12,16.12,0,0,0,6.27-8.84,11.15,11.15,0,0,0-1-7.72l-11.28,9.87-9,.93"/>
            <path data-name="top" class="fur outline" d="M101.52,19.91c13.55,6,23.33,10.22,30.73,13.36,4.88,2.06,13.48,5.38,13.6,8.51s-1.75,7.68-6.28,10.46-12.83,4.7-14.53,4.43"/>
          </g>
          <g id="left4">
            <path data-name="inner" class="inner outline" d="M25.81,45.79a45.48,45.48,0,0,1-3.94-10.31c-1.13-4.65-1.72-11.8-1.19-14.58.16-.85.3-3.44,1.55-3.33l5.53,1.23,4.41,12.58"/>
            <path data-name="fur" class="fur outline" d="M54.29,18.77c-1-2.1-8.21-2.93-13.5-3.4C29.57,14.39,22.91,14,22,17.68a26.69,26.69,0,0,1,7,9.53c1.22,2.91,2.72,8.17,2.72,8.17h0"/>
          </g>
          <g id="right4">
            <path data-name="inner" class="inner outline" d="M124.26,43.38s2.43-1.7,3.83-7.57c1.1-4.58,2.5-9.59,2.35-12.37-.05-.85.14-3.39-1.08-3.44l-5.55.48-5.92,11.68"/>
            <path data-name="top" class="fur outline" d="M97.5,16.47c1.2-1.92,10.55-2.23,15.76-2,11,.49,16.26,1.72,16.65,5.41-3.39.57-6.8,5.43-8.44,7.68a24.7,24.7,0,0,0-3,5.88"/>
          </g>
        </g>
        <g id="base">
          <path data-name="fur" class="fur" d="M23.94,52.05c2.83-19.63,24.68-38.54,52-38.54s48.18,16.65,52.42,38.54a58,58,0,0,1-.1,24.86c2.62,5,5.65,9.33,7.15,12.67A130.79,130.79,0,0,1,140.77,103a83,83,0,0,1,3,10.91,56.76,56.76,0,0,1,1.32,16.1,50.16,50.16,0,0,1-3.41,15c-1.83,4.45-4.65,11.3-11.69,16.45a34.13,34.13,0,0,1-16.06,6c-3.56.51-5,.24-13.82-.22-3.92-.21-10.26-.4-22.92-.79-10.57-.32-15.85-.46-19.6-.32-15.27.54-17.87,2.74-25,.54a33.09,33.09,0,0,1-13.72-8.59c-5.59-5.67-7.66-11.67-9-15.8a53,53,0,0,1-1.63-25.7A62.63,62.63,0,0,1,14,98.22q2.32-5.72,4.87-11.59c1.43-3.3,3.88-6.54,5.32-9.72C20.94,67.35,22.92,59.17,23.94,52.05Z"/>
          <path data-name="chest" class="fur2" d="M100.87,167.32a121.2,121.2,0,0,0,12-29.48c4.31-16.59,5-41.9-.11-56.67C106.87,64.34,95.54,58.41,76,58.41S46.46,65.76,40.38,80.9s-4.22,38.36-1,56.94c2,11.39,4.91,21.31,9.22,29.16,0,0,6.39-.7,11.13-.91a200.47,200.47,0,0,1,20.19.43C84.75,166.75,91.92,167.07,100.87,167.32Z"/>
          <path id="outline1" class="outline" d="M114.62,27.78a47.22,47.22,0,0,1,9.83,12.75,46.57,46.57,0,0,1,2.16,4.76,49.56,49.56,0,0,1,3.27,22.34A46.33,46.33,0,0,1,128,76.91a108.6,108.6,0,0,1,6.19,10.44,92,92,0,0,1,8.74,23c1.49,6.74,3.3,14.48,1.54,24.23-.73,4.07-3.55,20.81-16.75,28.5a35.11,35.11,0,0,1-10.47,3.8c-6.11,1.33-10.06.73-19.72.2-2.14-.12-7.24-.27-17.45-.56-13.63-.39-20.44-.57-24.2-.31-11.8.85-16.74,2.94-24.74,0a32.52,32.52,0,0,1-6.82-3.59C12.2,154.26,9,140.24,8.23,136.38c-.27-1.31-.42-2.33-.52-2.93-1.53-10,.56-17.82,2.43-24.78a114.89,114.89,0,0,1,8.72-22c2-4.07,3.85-7.38,5.21-9.72A36.58,36.58,0,0,1,23,73a39.74,39.74,0,0,1-.55-12.26,55.52,55.52,0,0,1,3-14.25,52.22,52.22,0,0,1,5.05-10.23"/>
      <path id="outline2" class="outline" d="M117.1,30.25a35.82,35.82,0,0,1,7.35,10.28s1.23,2.42,2.16,4.76a54.85,54.85,0,0,1,3.46,18.19,47.36,47.36,0,0,1-2,13.43c1.3,1.91,3.07,4.66,5,8.08a92.86,92.86,0,0,1,10,25.36c1.53,7,3.28,14.56,1.54,24.23-.73,4.07-3.55,20.81-16.75,28.5a35.11,35.11,0,0,1-10.47,3.8c-6.11,1.33-10.06.73-19.72.2-2.14-.12-7.24-.27-17.45-.56-13.63-.39-20.44-.57-24.2-.31-11.8.85-16.74,2.94-24.74,0a32.52,32.52,0,0,1-6.82-3.59C12.2,154.26,9,140.24,8.23,136.38c-.27-1.31-.42-2.33-.52-2.93-1.53-10,.54-17.72,2.43-24.78a114.39,114.39,0,0,1,9-22.7c1.9-3.8,3.64-6.89,4.91-9.06a38.46,38.46,0,0,1-1.53-6.75,43.79,43.79,0,0,1-.08-9.42,52.93,52.93,0,0,1,3-14.25A51,51,0,0,1,34,31.7"/>
      <path id="outline3" class="outline" d="M126.61,45.29A48,48,0,0,1,130.07,64a47.51,47.51,0,0,1-2,13c1.48,2.19,3.42,5.23,5.47,9A92.37,92.37,0,0,1,143,109.52c1.46,6.26,3.39,14.59,1.54,25.06-.77,4.37-3.7,20.9-16.75,28.5a35.11,35.11,0,0,1-10.47,3.8c-6.11,1.33-10.06.73-19.72.2-2.14-.12-7.24-.27-17.45-.56-13.63-.39-20.44-.57-24.2-.31-11.8.85-16.74,2.94-24.74,0a32.52,32.52,0,0,1-6.82-3.59C12.2,154.26,9,140.24,8.23,136.38c-.27-1.31-.42-2.33-.52-2.93-.31-2-1.41-10.58,2.43-24.78a112.28,112.28,0,0,1,7.52-19.58C20,84,22.32,79.9,24.07,76.91a42.13,42.13,0,0,1-1.83-10.42,47.26,47.26,0,0,1,1.19-12.26,65,65,0,0,1,3.06-10.47"/>
          <path id="top1" class="outline" d="M96.39,16.92A54.83,54.83,0,0,0,74,13.51a60.87,60.87,0,0,0-27.55,8"/>
          <path id="top2" class="outline" d="M100.66,18.27a55,55,0,0,0-22.07-4.92,60.86,60.86,0,0,0-28,6"/>
          <path id="top3" class="outline" d="M114.34,27.53a58.1,58.1,0,0,0-70.89-4.08"/>
        </g>
        <g id="cheeks">
          <ellipse class="right" cx="105.52" cy="57.11" rx="8.34" ry="5.17" transform="translate(-4.4 9.02) rotate(-4.8)"/>
          <ellipse class="left" cx="46.94" cy="57.11" rx="5.17" ry="8.34" transform="translate(-13.89 99.11) rotate(-85.2)"/>
        </g>
        <g id="snout">
          <path data-name="snout" class="fur2 outline" d="M76,44.91c11,0,19,11,19,19,0,9-10.16,13.13-19,13-9-.14-19.22-4.16-19-13C57.27,54.91,65,44.91,76,44.91Z"/>
          <g id="mouth1">
            <path class="tongue" d="M86.42,64.45c0,3.23-3.88,7.38-10.32,7.38s-10.37-4.17-10.37-7.41C69.43,66,73,60.91,76.07,60.91S82.49,66,86.42,64.45Z"/>
            <path class="outline" d="M65.73,64.34c0,.81,1.27,3.66,4,5.71a10.65,10.65,0,0,0,6.32,2.11,10.29,10.29,0,0,0,6.68-2.23c2.55-2,3.67-4.71,3.67-5.59"/>
          </g>
          <g id="mouth2">
            <path class="tongue" d="M84.54,64.63c0,3.23-4.92,6.22-8.44,6.22-3.82,0-8.46-3-8.46-6.21,3.33,0,5.32-3.73,8.43-3.73S82.07,65.26,84.54,64.63Z"/>
            <path class="outline" d="M67,64.64c2.39,3.83,6.17,6.21,9,6.21s6-1.66,9.07-6.21"/>
          </g>
          <g id="mouth3">
            <path class="tongue" d="M83.34,64.63c0,3.23-3.75,9.1-7.27,9.1-3.83,0-7.26-5.86-7.26-9.09,3.33,0,4.49-3.68,7.6-3.68S80.88,65.26,83.34,64.63Z"/>
            <path class="outline" d="M68.81,64.64c0,4.54,4.4,9.09,7.26,9.09s7.27-4.55,7.27-9.09"/>
          </g>
          <g id="mouth4">
            <path class="tongue" d="M83.31,64.44s-3.72,3-7.24,3c-3.82,0-7.29-3-7.29-3s4.69-2.88,7.33-3.47C78.66,61.27,83.31,64.44,83.31,64.44Z"/>
            <path class="outline" d="M68.78,64.44A9.61,9.61,0,0,0,76,68c4.42,0,7.35-3.59,7.35-3.59"/>
          </g>
          <g id="mouth5">
            <path class="tongue" d="M86.38,64.45c-.2,4.72-3.88,6.62-10.31,6.62s-10.38-1.9-10.38-6.65C69.4,66,72.92,60.91,76,60.91S82.45,66,86.38,64.45Z"/>
            <path class="drool" d="M81.6,69.67l.76-.39a1.48,1.48,0,0,1,1.15-.15,1.32,1.32,0,0,1,.54.33l-.24,2.82a.57.57,0,0,1,0,.26l-.31.81a.62.62,0,0,1-.79.34l-.76-.3a.59.59,0,0,1-.37-.45l-.2-1a.62.62,0,0,1,0-.27l-.18-1a1,1,0,0,1,.42-.91Z"/>
            <path class="outline" d="M65.7,64.34A6.31,6.31,0,0,0,66.76,68c1.48,2.1,4.06,2.52,6.51,2.93a18.67,18.67,0,0,0,5.55,0,19.64,19.64,0,0,0,2.49-.5s0,1.3,0,1.88.34,1.36,1,1.49a1.24,1.24,0,0,0,1.48-.5c.38-.55.15-1.2.12-1.86a4.87,4.87,0,0,1,.16-1.74,2.66,2.66,0,0,1,.52-.93c.2-.23.46-.54.68-.85a7.37,7.37,0,0,0,1.07-3.58"/>
          </g>
          <path class="nose" d="M82,52c0,1.69-2.32,4.06-6,4.06-3.52,0-6-2.34-6-4,0-2,4-2.73,6-2.73S82,50.15,82,52Z"/>
          <g id="lips">
            <path class="outline" d="M66,56.09a5,5,0,0,0-3.19,3.41,4.3,4.3,0,0,0,1.51,4.26,5.3,5.3,0,0,0,4.42.68c1.19-.29,1.59-.8,3.25-1.76a24.54,24.54,0,0,1,4-1.85"/>
            <path class="outline" d="M86.05,56.09a5,5,0,0,1,3.19,3.41,4.26,4.26,0,0,1-1.51,4.26,5.3,5.3,0,0,1-4.42.68c-1.2-.29-1.6-.8-3.26-1.76a24.92,24.92,0,0,0-4-1.85"/>
            <line class="outline" x1="76.03" y1="60.74" x2="76.03" y2="56.09"/>
          </g>
          <g id="mouth6">
            <path class="tongue outline" d="M88.26,65.33a16.14,16.14,0,0,1-5.46.26,10.31,10.31,0,0,1-4.54-2c-.56-2.74,3.77-5.2,6.15-5.16C87.06,58.46,90.11,63,88.26,65.33Z"/>
            <path class="outline thin" d="M83.23,65.33a19.08,19.08,0,0,0,1.18-4.6"/>
          </g>
        </g>
        <g id="eyes">
          <g id="open">
            <ellipse class="left eye" cx="55.81" cy="47.38" rx="5.5" ry="4.5" transform="matrix(0.67, -0.74, 0.74, 0.67, -16.8, 56.7)"/>
            <path class="gleam left" d="M59.28,45.68c-.28,1.4-1.94,1-3.27.65-1.57-.36-2.49-.76-1.93-2,.39-.84,1.46-1.2,2.89-1.1A2.32,2.32,0,0,1,59.28,45.68Z"/>
            <path class="gleam left" d="M54.23,50.69c-.33.3-1.42.13-2-.52a1.38,1.38,0,0,1,0-1.83c.64-.49,1.07,0,1.61.65S54.88,50.09,54.23,50.69Z"/>
            <ellipse class="right eye" cx="96.21" cy="47.38" rx="4.5" ry="5.5" transform="translate(-6.8 77.2) rotate(-42.36)"/>
            <path class="gleam right" d="M92.75,45.68c.28,1.4,1.94,1,3.27.65,1.56-.36,2.49-.76,1.92-2-.38-.84-1.45-1.2-2.89-1.1A2.32,2.32,0,0,0,92.75,45.68Z"/>
            <path class="gleam right" d="M97.8,50.69c.33.3,1.42.13,2-.52a1.38,1.38,0,0,0,0-1.83c-.64-.49-1.07,0-1.61.65S97.15,50.09,97.8,50.69Z"/>
          </g>
          <g id="wink">
            <path class="left eye outline" d="M51,45.45a24.91,24.91,0,0,1,9,1.7,26.15,26.15,0,0,0-8.71-2.49"/>
            <path class="right eye outline" d="M100.56,45.45a24.94,24.94,0,0,0-9,1.7,26.15,26.15,0,0,1,8.71-2.49"/>
          </g>
          <g id="laugh">
            <path class="left eye outline" d="M49.61,48.82A32.19,32.19,0,0,1,59,48a26,26,0,0,0-8-4.15"/>
            <path class="right eye outline" d="M102.07,48.82A32.19,32.19,0,0,0,92.71,48a26,26,0,0,1,8.05-4.15"/>
          </g>
          <g id="shy">
            <path class="left eye outline" d="M51,47a12.34,12.34,0,0,1,9.09-1.33,14.65,14.65,0,0,0-9,.49"/>
            <path class="right eye outline" d="M100.34,46.92a13.6,13.6,0,0,0-9.09-1.33,16.26,16.26,0,0,1,9,.49"/>
          </g>
        </g>
        <g id="brows">
          <g id="focussed">
            <ellipse class="fur2" cx="91.53" cy="35.01" rx="5.5" ry="4.5" transform="translate(-2.33 63.19) rotate(-37.64)"/>
            <ellipse class="fur2" cx="60.53" cy="35.01" rx="4.5" ry="5.5" transform="matrix(0.61, -0.79, 0.79, 0.61, -4.15, 61.56)"/>
          </g>
          <g id="expecting">
            <ellipse class="fur2" cx="91.53" cy="35.01" rx="4.05" ry="4.95" transform="translate(7.92 86.11) rotate(-52.36)"/>
            <ellipse class="fur2" cx="60.53" cy="35.01" rx="4.95" ry="4.05" transform="translate(-8.78 44.25) rotate(-37.64)"/>
          </g>
        </g>
      </g>
      <g id="scarf">
        <path id="pinny" class="scarf outline" d="M119.05,89.22c8.26,27-13.44,46.49-43.76,46.49s-49-21-41.9-46.49c0,0,20.85,7.48,43.27,7.48S119.05,89.22,119.05,89.22Z"/>
        <path id="tie" class="scarf outline" d="M39.72,86.86C28.26,83.17,24.28,79.13,22.82,75a12.19,12.19,0,0,1-.47-1.71,5.56,5.56,0,0,0-1.09,1.83,7.14,7.14,0,0,0,.45,5.2c2.12,5.16,9.82,9.07,9.82,9.07a93.18,93.18,0,0,0,19.8,7.06,98.11,98.11,0,0,0,24.76,2.41,124.11,124.11,0,0,0,24-2.81,98.51,98.51,0,0,0,19.28-6.52c.56-.26,9-4.18,11-9.21a7.19,7.19,0,0,0,.44-5.2,5.4,5.4,0,0,0-1.09-1.83,10.7,10.7,0,0,1-.46,1.71c-2.63,7.32-18,11.66-18,11.66a145.61,145.61,0,0,1-36.2,4.93C66.18,91.73,52.85,91.08,39.72,86.86Z"/>
        <g id="bakery_logo" data-name="bakery_logo">
          <path class="logo" d="M66.2,113.73a9.77,9.77,0,1,1,13.72,9h.78a10.1,10.1,0,1,0-9.26,0h.78A9.74,9.74,0,0,1,66.2,113.73Zm8.53-6.84a1.2,1.2,0,0,0-.75,0,5.48,5.48,0,0,0-.8.3l-.16-.3-.14-.59a1.56,1.56,0,0,0-.52-.89h-.14a7.24,7.24,0,0,0-1.44.8l.16.34.23.76v4.09l-.83.2v-1.92A3.57,3.57,0,0,0,70,108a.72.72,0,0,0-.67-.44,3.92,3.92,0,0,0-.68.67,6.18,6.18,0,0,0-.21,2v2l-.82.37a.43.43,0,0,0-.3.13l-.16.16.23.37a11.52,11.52,0,0,0,.89.82l.37.14a2.54,2.54,0,0,0,1.19.16,4.93,4.93,0,0,0,1.05-.37l2.15-.89,1.35-.89.2-.46.62-.66a1.12,1.12,0,0,0-.16-.53l-1.94.37v-1.56a12.91,12.91,0,0,0,2.08-.75q.21-.14,0-1C75.24,107.24,75,106.94,74.73,106.89ZM83.42,112a.55.55,0,0,1,.14-.3c.14-.18,0-.32,0-.37a1.46,1.46,0,0,0-1.19-1l-.3-1.71a2.83,2.83,0,0,1-.52,1.64l-.73.14a4.57,4.57,0,0,1-2.54,0c-.25,0-.37-.32-.37-.66v-.9a16.83,16.83,0,0,0,4.1-1.28.71.71,0,0,0,.34-.23A8.91,8.91,0,0,0,80.68,106h0a8.38,8.38,0,0,1-2.75,1,4.2,4.2,0,0,0,0-1.12,2.05,2.05,0,0,0-.59-.75,2.16,2.16,0,0,0-1-.3l-.73.37.16,1v3.4a2.67,2.67,0,0,0,1.64,2.7,5.69,5.69,0,0,0,3.27.51A5.93,5.93,0,0,0,83.42,112ZM76,122.49l.6-.44a1.09,1.09,0,0,0,.36-.38,1,1,0,0,0,0-.6V118l2.29,1.65,1.26.73a7.52,7.52,0,0,0,1.09.48A8.7,8.7,0,0,0,83.26,119L78.19,116a7.66,7.66,0,0,0,3.06-.6c.34-.43.34-.82,0-1.12l-.53-.52a3.53,3.53,0,0,0-1.71,0,17.34,17.34,0,0,0-2,.23,1.94,1.94,0,0,0-1-1.33c-.6-.41-1-.5-1.19-.3l-.53.44-.3.13a5,5,0,0,1,.37,1.35l-4.3.6H69.7a.25.25,0,0,0-.23.23.54.54,0,0,0,0,.29l.23.23.23.51c0,.16.32.36.8.59a2.56,2.56,0,0,0,1.42.23c-1,.85-2.06,1.71-3.27,2.67a8.21,8.21,0,0,0,1.35,1.35l.66-.22a6.48,6.48,0,0,0,1.92-1.35c.62-.53,1.17-1.08,1.72-1.63V120l-.23.23-.73.2-.53.16h-.59l1.94.76a3.32,3.32,0,0,1,.6,1,.4.4,0,0,0,.22.27h.32A.93.93,0,0,0,76,122.49Zm-11-8.76a11,11,0,1,1,17.27,9H83a11.15,11.15,0,1,0-18.5-7.79h0v1.48h0a11.4,11.4,0,0,0,4,6.29H69.7A10.9,10.9,0,0,1,65,113.73Zm-3-1a12.52,12.52,0,0,0,.41,1.71,2.26,2.26,0,0,1,.25.8,25.12,25.12,0,0,0,1.56,3.52c.14.21.25.44.36.64l.55.87c.21.32.44.64.69,1l.48.34.37.25.18.14.84.68h.58A32.37,32.37,0,0,1,62,112.75Zm4.83,9.83-.39-.32-.25-.18h0L66,122l-.44-.27a8.21,8.21,0,0,0-1.1-.66l-.71-.37a6.27,6.27,0,0,0-.64-.3,10.73,10.73,0,0,0-2.72-.84,23.28,23.28,0,0,1,5.17,3.24H67A.45.45,0,0,0,66.78,122.58Zm-5.38-6.33a.8.8,0,0,0-.52.16.25.25,0,0,0-.14.16h0a.71.71,0,0,0,0,.29,1.32,1.32,0,0,0,.82.64h1a.35.35,0,0,0,.21-.2.54.54,0,0,0,0-.18l-.11-.26a1.68,1.68,0,0,0-.76-.52A1.71,1.71,0,0,0,61.4,116.25Zm-2.81-1.38a.57.57,0,0,0,.14.51,1.79,1.79,0,0,0,.71.43,1.39,1.39,0,0,0,.57.12h0a.69.69,0,0,0,.66-.3c.07-.18-.27-.76-.85-1a2.08,2.08,0,0,0-.61,0C58.91,114.58,58.66,114.67,58.59,114.87Zm5.17,5.26,1.05.55c-.37-.55-.69-1.07-1-1.6s-1-.82-1.44-1.16H62.2a2.81,2.81,0,0,1-.71,0c-.66-.26-1.07-.71-1.07-1.15a11.26,11.26,0,0,0-1.21-.59h0a10.81,10.81,0,0,0-3-.89,25.57,25.57,0,0,1,7.14,4.77Zm-1.92-5.9a1.06,1.06,0,0,0-.64-.36H61c-.29.18-.29.73,0,1.28a1.28,1.28,0,0,0,.9.71h.18a.42.42,0,0,0,.16-.21,1.39,1.39,0,0,0-.18-1.07A2.12,2.12,0,0,0,61.84,114.23Zm-1.74.16h.18c.3-.18.28-.73,0-1.28a1.28,1.28,0,0,0-.89-.71h-.18c-.3.16-.28.74,0,1.26A1.27,1.27,0,0,0,60.1,114.39Zm-2.43-1.21c-.52,0-.93.21-1,.5s.44.67,1,.74H58c.5,0,.92-.21.94-.51s-.41-.64-1-.71Zm-.43-.89v.14a1.39,1.39,0,0,0,.91.5.46.46,0,0,0,.3-.11c.25-.23,0-.78-.32-1.22a1.35,1.35,0,0,0-.91-.5.51.51,0,0,0-.3,0c-.16.16-.14.5,0,.85Zm-.23.43a.42.42,0,0,0,0-.27,1.19,1.19,0,0,0-.16-.23,1.72,1.72,0,0,0-.66-.43,2.15,2.15,0,0,0-.62,0c-.32,0-.57,0-.64.29s.27.74.85.94a1.94,1.94,0,0,0,.59,0A.68.68,0,0,0,57,112.72Zm2.54-3.81a1.53,1.53,0,0,0,.85.29.46.46,0,0,0,.41-.16c.18-.29,0-.8-.57-1.14a1.74,1.74,0,0,0-.85-.3.42.42,0,0,0-.41.19C58.8,108.06,59.05,108.56,59.55,108.91Zm2.56,2.37a.43.43,0,0,0,.41-.18c.19-.27,0-.78-.57-1.12h-.14a1.59,1.59,0,0,0-.71-.21.46.46,0,0,0-.41.16c-.18.28,0,.81.57,1.15a1.87,1.87,0,0,0,.78.3Zm-.39-2.12a.45.45,0,0,0,.23,0h0c.32,0,.44-.64.3-1.24a1.28,1.28,0,0,0-.69-.91h-.18c-.34,0-.48.64-.32,1.23A1.51,1.51,0,0,0,61.72,109.16Zm-1.3-1.74h0c.32,0,.46-.64.3-1.24s-.48-.93-.78-.93h0c-.32,0-.46.64-.3,1.23S60.12,107.42,60.42,107.42Zm3.29,8.12c.28.55.57,1,.87,1.53a11.45,11.45,0,0,1-.5-3.34,11.7,11.7,0,0,1,.16-1.87,20.31,20.31,0,0,1,0-3.82,11.68,11.68,0,0,0-.78,3.45,17.55,17.55,0,0,0,0,2.9Zm-1.1-7.64a2,2,0,0,1,0,1,.82.82,0,0,1-.54.64H62v.14h0a2,2,0,0,1,.66.71.79.79,0,0,1,0,.84.74.74,0,0,1-.43.28,25.93,25.93,0,0,0,.78,2.7,15.93,15.93,0,0,1,0-2.93v-.53a26.71,26.71,0,0,1-.44-8.6,12.61,12.61,0,0,0-.89,4.58A1.63,1.63,0,0,1,62.61,107.9ZM85.12,122l.18-.14.36-.25.48-.34c.26-.35.48-.67.69-1s.37-.57.55-.87l.37-.64a23.06,23.06,0,0,0,1.55-3.52,2.26,2.26,0,0,1,.25-.8,11.2,11.2,0,0,0,.41-1.71,32.34,32.34,0,0,1-6.26,9.94h.57Zm3.81-1.72a3.93,3.93,0,0,0-.66.3l-.71.37a12.31,12.31,0,0,0-1.1.66l-.43.27a.48.48,0,0,1-.16.12h0l-.25.18-.39.32h1.33a23.87,23.87,0,0,1,5.16-3.25A11.55,11.55,0,0,0,88.93,120.29Zm.23-3.4a1,1,0,0,0,0,.25.28.28,0,0,0,0,.18.43.43,0,0,0,.23.21h1a1.39,1.39,0,0,0,.82-.64.39.39,0,0,0,0-.3h0a.26.26,0,0,0-.13-.16.85.85,0,0,0-.53-.16,2,2,0,0,0-.59.11A1.71,1.71,0,0,0,89.16,116.89Zm2.72-1h0a1.43,1.43,0,0,0,.58-.12,1.59,1.59,0,0,0,.7-.43.47.47,0,0,0,.14-.51c0-.2-.32-.29-.64-.29a1.94,1.94,0,0,0-.59,0c-.6.2-1,.64-.85,1S91.56,115.93,91.88,115.93Zm.83.13a12.38,12.38,0,0,0-1.21.6c0,.43-.42.89-1.08,1.14a2.81,2.81,0,0,1-.71,0h-.18q-.69.51-1.44,1.17a17.36,17.36,0,0,1-1,1.6l1.05-.55.48-.23A26,26,0,0,1,95.79,115a11.57,11.57,0,0,0-3,.89Zm-2.91-.2H90a1.27,1.27,0,0,0,.91-.71c.3-.55.3-1.1,0-1.28h-.16a1,1,0,0,0-.64.36l-.27.35a1.49,1.49,0,0,0-.19,1.07A.65.65,0,0,0,89.8,115.86Zm1.83-1.51h.19a1.22,1.22,0,0,0,.89-.73c.32-.53.32-1.1,0-1.26H92.5a1.26,1.26,0,0,0-.89.71C91.36,113.62,91.34,114.1,91.63,114.35Zm1.37-.44c0,.3.44.51.94.51h.23c.62,0,1.08-.39,1-.74s-.43-.5-.94-.5H94C93.42,113.27,93,113.59,93,113.91Zm.64-1a1.39,1.39,0,0,0,.92-.5v-.14l.16-.25c.21-.34.23-.69,0-.85a.51.51,0,0,0-.3,0,1.42,1.42,0,0,0-.91.51c-.41.43-.55,1-.32,1.21A.48.48,0,0,0,93.64,112.93ZM97,112c0-.2-.32-.29-.64-.29a1.52,1.52,0,0,0-.6,0,1.58,1.58,0,0,0-.68.43.87.87,0,0,0-.16.23.32.32,0,0,0,0,.27c0,.21.32.32.64.32a1.94,1.94,0,0,0,.59,0C96.75,112.72,97.14,112.31,97,112ZM91.11,109a.45.45,0,0,0,.41.16,1.49,1.49,0,0,0,.84-.29c.51-.35.76-.85.58-1.12a.45.45,0,0,0-.42-.19,1.71,1.71,0,0,0-.84.3C91.18,108.24,90.92,108.75,91.11,109Zm.11.8a.46.46,0,0,0-.41-.16,1.5,1.5,0,0,0-.71.21H90c-.5.34-.75.85-.57,1.12a.43.43,0,0,0,.41.18h0a1.68,1.68,0,0,0,.78-.29C91.15,110.64,91.43,110.12,91.22,109.84ZM89.6,108c-.16.59,0,1.16.29,1.23h0a.37.37,0,0,0,.21,0,1.48,1.48,0,0,0,.57-.87c.16-.59,0-1.14-.3-1.23h-.09A1.19,1.19,0,0,0,89.6,108Zm1.8-.55h0c.3,0,.64-.39.78-.92s0-1.16-.3-1.23h0c-.29,0-.64.39-.77.94S91.08,107.24,91.4,107.42Zm-3.72,4.39a13.11,13.11,0,0,1,.16,1.87,12.54,12.54,0,0,1-.48,3.34c.27-.48.57-1,.84-1.53s0-.78.14-1.14a17.67,17.67,0,0,0,0-2.91,10.81,10.81,0,0,0-.78-3.45A19.53,19.53,0,0,1,87.68,111.81Zm1.09-.48a15.93,15.93,0,0,1,0,2.93,21.32,21.32,0,0,0,.78-2.7.77.77,0,0,1-.43-.28.84.84,0,0,1,0-.84,1.82,1.82,0,0,1,.64-.71h0v-.14h0a.77.77,0,0,1-.53-.64,1.91,1.91,0,0,1,.73-2,12.61,12.61,0,0,0-.89-4.58,27.3,27.3,0,0,1-.41,8.6C88.75,111,88.75,111.15,88.77,111.33ZM61.24,128.94h0v-4.1H59.39l1.26,2.7a.22.22,0,0,1,0,.16l-1.26,2.7H64l-2.65-1.3Zm3.34,1.21V129H62.2Zm26.16-1.35h0l-2.65,1.3h4.57l-1.26-2.69a.22.22,0,0,1,0-.16l1.26-2.7H90.81v4.09Zm-3.38.18v1.17L89.73,129Zm3.33,0Zm0-.07Zm0,0Zm0-.09h0v-4.07h0v4.07Zm-.07.14Zm-4.55-2.38V127h1.44v-.46H86.14Zm4.14-3.32H61.56v5.54H90.28v-3.91h0Zm-7.36,1.28a.39.39,0,0,1,.3,0,2.54,2.54,0,0,0,.77.39V125c0,.11-.27.41-.45.36a1.91,1.91,0,0,1-.76-.59c0-.18,0-.28.21-.34Zm-2.29.35a3.08,3.08,0,0,0,.76-.35h.3c.11,0,.16.16,0,.28a1.36,1.36,0,0,1-.74.57.61.61,0,0,1-.48-.41c-.07-.21,0-.14.12-.16Zm-5.3-.37a.13.13,0,0,1,.19,0h0a1.72,1.72,0,0,0,.32.23h0s-.16.27-.22.25a1,1,0,0,1-.37-.41.12.12,0,0,1,0-.14Zm-.34.16a.15.15,0,0,1,.2,0,1.42,1.42,0,0,0,.25.3h0s-.2.23-.27.18a2,2,0,0,1-.28-.46.2.2,0,0,1,0-.09Zm-10.75.18h0a.65.65,0,0,1,.13-.16h1.88c.14,0,.55.46.46.62s-.14,0-.21,0-.89.46-1.12.5a.6.6,0,0,1-.53-.22h0l.87-.37H64.19c-.09-.11-.11-.23,0-.43Zm2.54,2.63a6.71,6.71,0,0,1-1.79,0H64.6a1.35,1.35,0,0,1-.8-.45c-.18-.26,0-.69.32-1s.19,0,.32,0,.14.18,0,.22-.2.23,0,.39,0,0,.19.12H65a5,5,0,0,0,2.14-.14h0a.71.71,0,0,1-.43.76Zm4,0c-1,.14-2.74,0-2.74-.89a1.39,1.39,0,0,1,.77-1c-.16-.25-.32-.5-.41-.68s0,0,0-.14a.38.38,0,0,1,.28-.27h.39v.16a1.83,1.83,0,0,0,.32.64c.48-.23,1-.39,1.18-.48h.16s.19,0,.28.27a.49.49,0,0,1,0,.39H70.8a9.12,9.12,0,0,0-1,.32l.16.14c.14.13,0,.25,0,.36s-.16.16-.34,0a.94.94,0,0,1-.32-.27c-.28.16-.46.34-.46.52,0,.53,1.21.48,2.28.25h0s-.09.67-.32.69Zm1.67-.27a.73.73,0,0,1-.57-.44.11.11,0,0,1,0-.13,1.7,1.7,0,0,0,.64-.76.23.23,0,0,1,.3,0,.31.31,0,0,1,.16.3s-.35.89-.58,1Zm.82.32c-.27,0-.39-.37-.41-.66h0c.46.13,1.17.16,1.17-.19s-.46-.45-.78-.61-.18-.37,0-.44L74,125H72.77c-.19,0-.3,0-.16-.25s.18-.32.32-.32h1.6c.13,0,.46.51.41.62s-.14,0-.23,0l-.71.53h0c.55.19.83.49.83.89-.12,1-1.31,1-1.58,1Zm2.63-.82c0,.18-.32.5-.48.39a2.41,2.41,0,0,1-.68-1,.24.24,0,0,1,0-.35h0c.2,0,.25,0,.34.16a3.47,3.47,0,0,0,.66.61.14.14,0,0,1,.12.16h0Zm3.71-.74h-.51l.46.39c.21.14-.27.44-.43.44s0,0-.21-.12-1.62-.32-1.62.12,1.64.36,2.28.23h0s-.36.61-.5.61c-1.58,0-2.47-.2-2.47-.84s.92-.85,1.92-.71a.91.91,0,0,1-.18-.21,8.23,8.23,0,0,0-1.92.19c-.28,0-.28,0-.21-.26s.19-.32.32-.32H78l-.16-.25H76.75c-.35,0-.21,0,0-.29a.31.31,0,0,1,.27-.21h.71a.43.43,0,0,1,0-.16s0-.16.25-.21a.72.72,0,0,1,.41,0v.21h1.33s0,.5-.46.46a2.88,2.88,0,0,0-.68,0l.18.27h1.35s-.19.73-.53.64Zm4.57.94h0s-.43.51-.57.44a4.61,4.61,0,0,1-1.1-1v1c0,.11,0,.18-.34.18s-.41,0-.39-.14,0-.66,0-1.12a3.73,3.73,0,0,1-1.12,1,.69.69,0,0,1-.53-.48h0a4.82,4.82,0,0,0,1.38-.94,9.11,9.11,0,0,0-1.38.16v-.37a.28.28,0,0,1,.3-.27h1.26v-1.12c0-.07.18,0,.36,0h.37v1.1H84s-.19.64-.37.59a4.89,4.89,0,0,0-1.07-.18,11.51,11.51,0,0,0,1.62,1Zm1.26-1a3.21,3.21,0,0,1-.37,1.74.59.59,0,0,1-.48-.46h0a2.33,2.33,0,0,0,.23-1.08v-1.28c0-.16.39-.34.48-.34h1v-.25c0-.11,0,0,.32,0H87v.25h1.44a.54.54,0,0,1,0,.18c0,.16-.12.3-.23.28H85.53Zm2.7,0a5.34,5.34,0,0,0-.8,0H87v.27h.75s.44.25.44.35v1.12c0,.25,0,.16-.3.16H86.19a.62.62,0,0,1-.34.13c-.19,0-.32,0-.3-.16s0-.86,0-1v-.18a.85.85,0,0,1,.43-.35h.53v-1c0-.16,0-.11.32-.11h.37v.16h.32a9.55,9.55,0,0,0,1.07,0h0s-.36.53-.43.5Z"/>
      </g>
    </g>
  </svg>
    </div>
  `,
	props: {
		size: { type: String, default: "medium" },
		shiba: { type: String, default: "okaka" },
		mood: { type: String, default: "" },
		leftEye: { type: String, default: "open" },
		rightEye: { type: String, default: "open" },
		leftEar: { type: String, default: "up" },
		rightEar: { type: String, default: "flat" },
		blush: { type: Boolean, default: false }
	},
	computed: {
		ears: function () {
			let l = "l4";
			let r = "r4";
			if (this.leftEar === "up") {
				l = "l1";
			} else if (this.leftEar === "down") {
				l = "l3";
			} else if (this.leftEar === "flat") {
				l = "l2";
			}
			if (this.rightEar === "up") {
				r = "r1";
			} else if (this.rightEar === "down") {
				r = "r3";
			} else if (this.rightEar === "flat") {
				r = "r2";
			}
			return `/ ears ${l} ${r}`;
		},
		eyes: function () {
			if (this.leftEye === this.rightEye) {
				return `/ eyes ${this.leftEye}`;
			} else {
				return `/ eyes l${this.leftEye} r${this.rightEye}`;
			}
		},
		cheeks: function () {
			return this.blush ? "/ blush" : "";
		},
		styleClass: function () {
			return `${this.size} / ${this.mood} ${this.eyes} ${this.ears} ${this.cheeks}`;
		}
	},
	methods: {}
});
Vue.component("MochiPaws", {
	template: `
    <div class="MochiPaws /" :class="size">
      <svg class="paws" xmlns="http://www.w3.org/2000/svg" width="152" height="40" viewBox="0 0 152 40">
      <title>Mochi Paws</title>
      <g id="paws">
        <g id="left-paw">
          <path id="paw" class="fur" d="M5.3,24.53A19.76,19.76,0,0,1,11,12,18.79,18.79,0,0,1,24,6.41a18,18,0,0,1,13.71,6.35,13.28,13.28,0,0,1,2.91,6.39,7.68,7.68,0,0,1-.44,4.77,7.12,7.12,0,0,1-3.5,3.29,7.34,7.34,0,0,1-4,.51A6.07,6.07,0,0,1,30.49,30a7,7,0,0,1-6.06.18,4.84,4.84,0,0,1-1.36,2.38c-1.7,1.59-4.63,1.77-7.36.43A6.2,6.2,0,0,1,13.55,31a6.13,6.13,0,0,1-.93-2.12Z"/>
          <path class="fur outline" d="M5.3,24.53A19.76,19.76,0,0,1,11,12,18.79,18.79,0,0,1,24,6.41a18,18,0,0,1,13.71,6.35,12.15,12.15,0,0,1,2.91,6.39A8,8,0,0,1,39.51,25c-2.09,2.87-5.85,2.86-6.32,2.85"/>
          <path class="fur outline" d="M31.11,22a4.77,4.77,0,0,1,2,3.4,4.69,4.69,0,0,1-1.07,3.27,5.68,5.68,0,0,1-3.85,2,6.59,6.59,0,0,1-3.41-.44"/>
          <path class="fur outline" d="M12.62,28.9a6.79,6.79,0,0,0,2.83,3.87c2.82,1.72,7.5,1.17,8.72-1.7.77-1.79,0-4.16-1.62-6"/>
        </g>
        <g id="right-paw">
          <path class="fur" d="M146.7,24.53A19.76,19.76,0,0,0,141,12,18.79,18.79,0,0,0,128,6.41a18,18,0,0,0-13.71,6.35,13.28,13.28,0,0,0-2.91,6.39,7.68,7.68,0,0,0,.44,4.77,7.12,7.12,0,0,0,3.5,3.29,7.34,7.34,0,0,0,4,.51,6.07,6.07,0,0,0,2.2,2.23,7,7,0,0,0,6.06.18,4.84,4.84,0,0,0,1.36,2.38c1.7,1.59,4.63,1.77,7.36.43A6.2,6.2,0,0,0,138.45,31a6.13,6.13,0,0,0,.93-2.12Z"/>
          <path class="fur outline" d="M146.7,24.53A19.76,19.76,0,0,0,141,12,18.79,18.79,0,0,0,128,6.41a18,18,0,0,0-13.71,6.35,12.15,12.15,0,0,0-2.91,6.39A8,8,0,0,0,112.49,25c2.09,2.87,5.85,2.86,6.32,2.85"/>
          <path class="fur outline" d="M120.89,22a4.77,4.77,0,0,0-2,3.4,4.69,4.69,0,0,0,1.07,3.27,5.68,5.68,0,0,0,3.85,2,6.59,6.59,0,0,0,3.41-.44"/>
          <path class="fur outline" d="M139.38,28.9a6.79,6.79,0,0,1-2.83,3.87c-2.82,1.72-7.5,1.17-8.72-1.7-.77-1.79,0-4.16,1.62-6"/>
        </g>
      </g>
    </svg>
    </div>
  `,
	props: {
		size: { type: String, default: "medium" }
	},
	computed: {},
	methods: {}
});

let app = new Vue({
	el: "#app",
	data: {}
});