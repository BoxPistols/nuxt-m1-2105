// Vue Test Utilsの関数をインポート
import { mount } from "@vue/test-utils";
// eslint-disable-next-line import/no-unresolved
import PostPage from "@/pages/posts/_id.vue";

describe("PostPage", () => {
  // コンポーネントが期待される内容をレンダリングするかテストします
  it("renders the post page with details", () => {
    // ダイナミックルートのパラメータをモックします
    const $route = {
      params: { id: "" },
    };

    // ページコンポーネントをマウントします
    const wrapper = mount(PostPage, {
      mocks: {
        $route,
      },
      stubs: ["NuxtLink", "router-link"], // NuxtLinkとrouter-linkをスタブ化する
    });

    // `.post-details` クラスを持つ要素が存在することを確認します
    expect(wrapper.find(".post-details").exists()).toBe(true);
  });
});
