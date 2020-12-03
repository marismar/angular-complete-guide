import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.server = this.serversService.getServer(id);

    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params.id);
    });
  }

  onEdit(): void {
    // this.router.navigate(['/servers', this.server.id, 'edit']) // using absolute path
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve', // preserve the current query params to next route
    }); // using relative path
  }
}
