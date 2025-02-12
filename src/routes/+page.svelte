<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import CardHeader from "$lib/components/ui/card/card-header.svelte";
	import Card from "$lib/components/ui/card/card.svelte";
	import Input from "$lib/components/ui/input/input.svelte";
	import Label from "$lib/components/ui/label/label.svelte";

  const { data } = $props();
  const { userProfile } = $derived(data);

  $inspect(userProfile);
</script>


<h1 class="text-2xl mb-4">Welcome to <span class="text-[#ff9800]">SvelteKit</span>, <span class="text-[#C6F94F]">Drizzle</span>, & <span class="text-[#47D191]">Supabase</span>!</h1>

{#if userProfile}
  <Card>
    <CardHeader>
      <div>
        <Label>Email</Label>
        <Input value={userProfile.email} />
      </div>
      <div>
        <Label>First Name</Label>
        <Input />
      </div>
      <div>
        <Label>Last Name</Label>
        <Input />
      </div>
    </CardHeader>
  </Card>
{:else}
  <p class="mb-8">You are not logged in.</p>
{/if}


<p class="mb-8">Visit <a class="text-[#ff9800]" href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the Sveltekit documentation, <a class="text-[#C6F94F]" href="https://orm.drizzle.team/docs/get-started">orm.drizzle.team/docs/get-started</a> for the Drizzle documentation, and <a class="text-[#47D191]" href="https://supabase.com/docs">supabase.com/docs</a> to read the supabase documentation.</p>

{#if userProfile}
  <Button href="/auth/logout">Log Out</Button>
{:else}
  <Button href="/auth/login">Log In</Button>
{/if}
