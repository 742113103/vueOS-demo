<template>
	<div class="main-container desktop flex flex-column">
		<div class="main-content flex1">
			<transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>

		<taskbar class="grass"></taskbar>
	</div>
</template>

<script>
export default {
	components: {
		taskbar: () => import("./taskBar.vue"),
	},
	data() {
		return {
			/**/
		};
	},
	methods: {
		/**/
	},
	created() {
		/**/
	},
};
</script>

<style lang='scss' scoped>
.main-container {
	width: 100%;
	height: 100%;
	position: relative;
	background-color: #222232;
}
.main-container::before {
	content: "";
	width: 100%;
	height: 100%;
	position: absolute;
	background: linear-gradient(#f00, #f0f, #f00);
	clip-path: circle(15% at 80% 80%);
	opacity: 0.7;
}
.main-container::after {
	content: "";
	width: 100%;
	height: 100%;
	position: absolute;
	background: linear-gradient(#f0f, #0ff);
	clip-path: circle(10% at 90% 55%);
	opacity: 0.7;
}
</style>