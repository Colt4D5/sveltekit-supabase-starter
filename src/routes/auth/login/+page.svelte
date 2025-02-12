<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import CardContent from "$lib/components/ui/card/card-content.svelte";
  import CardHeader from "$lib/components/ui/card/card-header.svelte";
  import Card from "$lib/components/ui/card/card.svelte";

  
</script>

<Card>
  <CardHeader>
    Log in to your account
  </CardHeader>
  <CardContent>
    <form method="post">
      <Button href="/auth/login/github">Sign in with Github</Button>
    </form>
  </CardContent>
</Card>