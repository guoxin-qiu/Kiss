import{_ as t,r as p,o as e,c as o,a as s,b as n,d as c,e as l}from"./app-d85a60fe.js";const i={},u=s("h1",{id:"redux",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#redux","aria-hidden":"true"},"#"),n(" Redux")],-1),r={href:"https://redux-toolkit.js.org/tutorials/quick-start",target:"_blank",rel:"noopener noreferrer"},k=l(`<ol><li>添加依赖项</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @reduxjs/toolkit react-redux redux-logger redux-persist
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @types/redux-logger @types/redux-persist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>建立 store/rootReducer.ts</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> combineReducers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@reduxjs/toolkit&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mockSlice <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../mockSlice&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> reducers <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token punctuation">[</span>mockSlice<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token operator">:</span> mockSlice<span class="token punctuation">.</span>reducer<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> reducers<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>添加 store/index.ts</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/* eslint-disable @typescript-eslint/no-explicit-any */</span>
<span class="token keyword">import</span> Taro <span class="token keyword">from</span> <span class="token string">&#39;@tarojs/taro&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Action<span class="token punctuation">,</span> configureStore<span class="token punctuation">,</span> ThunkAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@reduxjs/toolkit&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> shallowEqual<span class="token punctuation">,</span> TypedUseSelectorHook<span class="token punctuation">,</span> useDispatch<span class="token punctuation">,</span> useSelector <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createLogger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux-logger&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> persistStore<span class="token punctuation">,</span> persistReducer<span class="token punctuation">,</span> <span class="token constant">FLUSH</span><span class="token punctuation">,</span> <span class="token constant">REHYDRATE</span><span class="token punctuation">,</span> <span class="token constant">PAUSE</span><span class="token punctuation">,</span> <span class="token constant">PERSIST</span><span class="token punctuation">,</span> <span class="token constant">PURGE</span><span class="token punctuation">,</span> <span class="token constant">REGISTER</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux-persist&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> rootReducer <span class="token keyword">from</span> <span class="token string">&#39;./rootReducer&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> taroStorage <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">getItem</span><span class="token operator">:</span> <span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>Taro<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">setItem</span><span class="token operator">:</span> <span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> item<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>Taro<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">removeItem</span><span class="token operator">:</span> <span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>Taro<span class="token punctuation">.</span><span class="token function">removeStorageSync</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> persistConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  key<span class="token operator">:</span> <span class="token string">&#39;redux_root&#39;</span><span class="token punctuation">,</span>
  storage<span class="token operator">:</span> taroStorage<span class="token punctuation">,</span>
  whitelist<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;mock&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  throttle<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> persistedReducer <span class="token operator">=</span> <span class="token function">persistReducer</span><span class="token punctuation">(</span>persistConfig<span class="token punctuation">,</span> rootReducer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">configureStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  reducer<span class="token operator">:</span> persistedReducer<span class="token punctuation">,</span>
  <span class="token function-variable function">middleware</span><span class="token operator">:</span> <span class="token punctuation">(</span>gDM<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> middleware <span class="token operator">=</span> <span class="token function">gDM</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      serializableCheck<span class="token operator">:</span> <span class="token punctuation">{</span>
        ignoredActions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">FLUSH</span><span class="token punctuation">,</span> <span class="token constant">REHYDRATE</span><span class="token punctuation">,</span> <span class="token constant">PAUSE</span><span class="token punctuation">,</span> <span class="token constant">PERSIST</span><span class="token punctuation">,</span> <span class="token constant">PURGE</span><span class="token punctuation">,</span> <span class="token constant">REGISTER</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> middleware<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> middleware<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> persistor <span class="token operator">=</span> <span class="token function">persistStore</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RootState</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> store<span class="token punctuation">.</span>getState<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">AppDispatch</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> store<span class="token punctuation">.</span>dispatch<span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">AppThunk</span> <span class="token operator">=</span> ThunkAction<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">,</span> RootState<span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span> Action<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// Use throughout your app instead of plain \`useDispatch\` and \`useSelector\`</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useAppDispatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token generic-function"><span class="token function">useDispatch</span><span class="token generic class-name"><span class="token operator">&lt;</span>AppDispatch<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useAppSelector<span class="token operator">:</span> TypedUseSelectorHook<span class="token operator">&lt;</span>RootState<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">useSelector</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> shallowEqual<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>添加 services/mock/mock.slice.ts</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createAsyncThunk<span class="token punctuation">,</span> createSlice<span class="token punctuation">,</span> PayloadAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@reduxjs/toolkit&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> mockApi <span class="token keyword">from</span> <span class="token string">&#39;./mock.api&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">MockState</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> initialState<span class="token operator">:</span> MockState <span class="token operator">=</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> mockSlice <span class="token operator">=</span> <span class="token function">createSlice</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;mock&#39;</span><span class="token punctuation">,</span>
  initialState<span class="token punctuation">,</span>
  reducers<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">decrement</span><span class="token operator">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>value <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">incrementByAmount</span><span class="token operator">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">,</span> action<span class="token operator">:</span> PayloadAction<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>value <span class="token operator">+=</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">reset</span><span class="token operator">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">,</span> action<span class="token operator">:</span> PayloadAction<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>value <span class="token operator">=</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">extraReducers</span><span class="token operator">:</span> <span class="token punctuation">(</span>builder<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    builder<span class="token punctuation">.</span><span class="token function">addCase</span><span class="token punctuation">(</span>getDefaultValue<span class="token punctuation">.</span>fulfilled<span class="token punctuation">,</span> <span class="token punctuation">(</span>state<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>payload<span class="token punctuation">.</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>value <span class="token operator">=</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token punctuation">{</span> increment<span class="token punctuation">,</span> decrement<span class="token punctuation">,</span> incrementByAmount<span class="token punctuation">,</span> reset <span class="token punctuation">}</span> <span class="token operator">=</span> mockSlice<span class="token punctuation">.</span>actions<span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getDefaultValue <span class="token operator">=</span> <span class="token function">createAsyncThunk</span><span class="token punctuation">(</span><span class="token string">&#39;mock/getDefaultValue&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> mockApi<span class="token punctuation">.</span><span class="token function">getMockDefaultValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">MockSlice</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>mockSlice<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token operator">:</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> mockSlice<span class="token punctuation">[</span><span class="token string">&#39;reducer&#39;</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>添加 services/mock/mock.selector.ts</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createDraftSafeSelector <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@reduxjs/toolkit&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> RootState<span class="token punctuation">,</span> useAppSelector <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useGetMockValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> mockValueSelector <span class="token operator">=</span> <span class="token function">createDraftSafeSelector</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>state<span class="token operator">:</span> RootState<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>mock<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
    <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> value
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">useAppSelector</span><span class="token punctuation">(</span>mockValueSelector<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>在入口文件添加 Provider</li></ol><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Provider</span></span> <span class="token attr-name">store</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>React18 问题，会添加@types/react version 18，解决方法在 package.json 添加</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;resolutions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@types/react&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^16 || ^17&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function d(v,m){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,s("p",null,[n("使用"),s("a",r,[n("'redux-toolkit'"),c(a)]),n(` Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't actually mutate the state because it uses the Immer library, which detects changes to a "draft state" and produces a brand new immutable state based off those changes`)]),k])}const y=t(i,[["render",d],["__file","73.redux.html.vue"]]);export{y as default};