CREATE TABLE `account` (
	`userId` text NOT NULL,
	`providerId` text NOT NULL,
	`providerAccountId` text NOT NULL,
	PRIMARY KEY(`providerAccountId`, `providerId`, `userId`)
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`expires_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users_to_workspaces` (
	`userId` text NOT NULL,
	`workspaceId` text NOT NULL,
	`createdAt` integer NOT NULL,
	PRIMARY KEY(`userId`, `workspaceId`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `workspace` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`type` text NOT NULL,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);