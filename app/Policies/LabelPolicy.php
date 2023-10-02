<?php

namespace App\Policies;

use App\Models\Label;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class LabelPolicy
{
    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Label $label): Response
    {
        return $user->id === $label->user_id ? Response::allow() : Response::denyAsNotFound();
    }
}
